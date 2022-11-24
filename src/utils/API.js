import config from '../config';

const mode = 'cors';

export const GET = async (url = '', data = {}) => {
    const urlParams = Object.values(data) > 0 ? '?' + new URLSearchParams(data).toString() : '';

    const response = await fetch(config.apiPath + url + urlParams, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: mode, // no-cors, *cors, same-origin
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer' // no-referrer, *client
    });
    console.log(response);
    return await response.json(); // parses JSON response into native JavaScript objects
};

export const POST = async (url = '', data = {}) => {
    const response = await fetch(config.apiPath + url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: mode, // no-cors, *cors, same-origin
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data)
    });
    return await response.json(); // parses JSON response into native JavaScript objects
};
