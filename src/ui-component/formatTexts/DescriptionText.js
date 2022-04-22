import { Typography } from '@mui/material';
import { useState } from 'react';
import PropTypes from 'prop-types';

const cutText = (text, maxSize) => {
    return (text + '').substring(0, maxSize);
};

const cutTextSuffix = (isOpen) => {
    const text = isOpen ? 'Скрыть' : 'Подробнее';
    return <Typography variant="caption"> {text}</Typography>;
};

const style = {
    display: '-webkit-box',
    overflow: 'hidden'
};

const DescriptionText = ({ maxSize = 130, variant = 'h5', text, ...other }) => {
    const [open, setOpen] = useState(false);
    return (
        <Typography
            variant={variant}
            {...other}
            onClick={() => {
                setOpen(!open);
            }}
            {...style}
        >
            {open ? text : cutText(text, maxSize)}
            {cutTextSuffix(open)}
        </Typography>
    );
};

DescriptionText.propTypes = {
    maxSize: PropTypes.number,
    variant: PropTypes.string,
    text: PropTypes.string
};

export default DescriptionText;
