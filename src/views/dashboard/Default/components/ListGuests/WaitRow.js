import { Grid, Typography, Divider, Fade, Button } from '@mui/material';
import { AccessTime, Person, ArrowForward } from '@mui/icons-material';
import { useState } from 'react';
import propTypes from 'prop-types';

const WaitRow = ({ id, name, enterTime, guests }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <Grid container direction="column">
            <Grid item>
                <Grid container alignItems="center" justifyContent="space-between" onClick={handleOpen}>
                    <Grid item>
                        <Typography variant="subtitle1" color="inherit">
                            {name}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item>
                                <Grid container direction="row" alignContent="center" alignItems="center">
                                    <Grid item>
                                        <Typography variant="h5">
                                            <AccessTime fontSize="small" />
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h5">{enterTime}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Fade in={open} unmountOnExit>
                    <Grid item xs={12}>
                        <Grid container direction="row" alignItems="center">
                            <Grid item xs={9}>
                                <Grid container direction="column" alignItems="center" justifyContent="space-between">
                                    <Grid item>
                                        <Grid container direction="row" alignContent="center" alignItems="center">
                                            <Grid item>
                                                <Typography variant="h5">??????-???? ????????????</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="h5">
                                                    <Person fontSize="small" />
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="h5">: {guests}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Grid container direction="row" alignContent="center" alignItems="center">
                                            <Grid item>
                                                <Typography variant="h5">?????????? ??????????????????</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="h5">
                                                    <AccessTime fontSize="small" />
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="h5">: {enterTime}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant="contained" href={`/order-actions/${id}`}>
                                    <ArrowForward />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Fade>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
        </Grid>
    );
};

WaitRow.propTypes = {
    id: propTypes.number,
    name: propTypes.string,
    enterTime: propTypes.string,
    guests: propTypes.number
};

export default WaitRow;
