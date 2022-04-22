import { Grid, Typography, Divider } from '@mui/material';
import { Person } from '@mui/icons-material';
import propTypes from 'prop-types';

const CompleteRow = ({ name, guests }) => {
    return (
        <Grid item>
            <Grid container direction="column">
                <Grid item>
                    <Grid container alignItems="center" justifyContent="space-between">
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
                                                <Person />
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="h5">{guests}</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Divider sx={{ my: 1.5 }} />
        </Grid>
    );
};

CompleteRow.propTypes = {
    id: propTypes.number,
    name: propTypes.string,
    enterTime: propTypes.string,
    guests: propTypes.number
};

export default CompleteRow;
