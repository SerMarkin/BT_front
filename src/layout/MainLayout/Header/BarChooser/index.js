import { useEffect } from 'react';
import { Select, MenuItem } from '@mui/material';
import { SET_USER_BAR } from 'store/actions';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const BarChooser = ({ isLoading, listBars }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const handleChange = (event) => {
        dispatch({ type: SET_USER_BAR, value: event.target.value });
    };

    useEffect(() => {
        if (!user.bar && 'length' in listBars && listBars.length > 0) {
            dispatch({ type: SET_USER_BAR, value: listBars[0] });
        }
    });

    return isLoading || !user.bar ? (
        <></>
    ) : typeof listBars === 'object' && listBars.length !== 1 ? (
        <Select value={user.bar.id} onChange={handleChange} displayEmpty>
            {listBars.map((bar) => (
                <MenuItem value={bar.id} key={bar.id}>
                    {bar.label}
                </MenuItem>
            ))}
        </Select>
    ) : (
        <MenuItem>{user.bar.label}</MenuItem>
    );
};

BarChooser.propTypes = {
    isLoading: PropTypes.bool,
    listBars: PropTypes.array
};
export default BarChooser;
