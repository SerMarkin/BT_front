import React, { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import AuthWrapper1 from '../AuthWrapper1';
import ShortInfoPath from './components/ShortInfoPath';
import LongInfoPath from './components/LongInfoPath';
import InfoPanel from './components/InfoPanel';

import { Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';

import './index.css';

const SwiperRouter = () => {
    const theme = useTheme();

    return (
        <AuthWrapper1 className="workplace">
            <ShortInfoPath />
            <LongInfoPath />
            <InfoPanel />
        </AuthWrapper1>
    );
};

export default SwiperRouter;
