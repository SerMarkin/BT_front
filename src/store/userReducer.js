// action - state management
import * as actionTypes from './actions';

export const initialState = {
    bar: null
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER_BAR:
            return {
                ...state,
                bar: action.value
            };
        default:
            return state;
    }
};

export default userReducer;
