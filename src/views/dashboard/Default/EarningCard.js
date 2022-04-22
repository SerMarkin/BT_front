import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Box, Grid, Typography, FormControl, OutlinedInput, InputAdornment } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';

import { Check } from '@mui/icons-material';

const CardWrapper = styled(MainCard)(({ theme }) => ({
    // backgroundColor: theme.palette.secondary.dark,
    // color: '#fff',
    overflow: 'hidden',
    position: 'relative'
}));

// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

const EarningCard = ({ isLoading }) => {
    const theme = useTheme();

    const [code, setCode] = useState('');

    const handleChange = (event) => {
        setCode(event.target.value);
    };

    return (
        <>
            {isLoading ? (
                <SkeletonEarningCard />
            ) : (
                <CardWrapper border={true} content={false}>
                    <Box
                        sx={{
                            p: 2.25
                        }}
                    >
                        <Grid container direction="column">
                            <Grid item>
                                <Typography variant="h4">Проверить код</Typography>
                            </Grid>
                            <Grid item>
                                <Grid container alignItems="center">
                                    <Grid item>
                                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                            <OutlinedInput
                                                id="outlined-adornment-code"
                                                value={code}
                                                onChange={handleChange}
                                                type="number"
                                                endAdornment={<InputAdornment position="start">Код</InputAdornment>}
                                                aria-describedby="outlined-code-helper-text"
                                                inputProps={{
                                                    'aria-label': 'code'
                                                }}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item>
                                        <Avatar
                                            variant="rounded"
                                            sx={{
                                                ...theme.typography.commonAvatar,
                                                ...theme.typography.largeAvatar,
                                                backgroundColor: theme.palette.secondary[800],
                                                marginTop: 0,
                                                mt: 1
                                            }}
                                            style={{ marginTop: 0 }}
                                        >
                                            <Check fontSize="2rem" />
                                        </Avatar>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </CardWrapper>
            )}
        </>
    );
};

EarningCard.propTypes = {
    isLoading: PropTypes.bool
};

export default EarningCard;
