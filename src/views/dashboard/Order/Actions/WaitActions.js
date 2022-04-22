import { Typography, Grid, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
//match.params.id
const WaitActions = ({ id, status, name, enterTime, guests, bills }) => {
    const theme = useTheme();

    return (
        <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={12}>
                <Button
                    variant="contained"
                    color="success"
                    sx={{ boxShadow: 'none', width: '100%', height: '30vh', color: theme.palette.grey[50] }}
                >
                    Принять гостя
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" color="error" sx={{ boxShadow: 'none', width: '100%', height: '30vh' }}>
                    Отменить заказ
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" color="primary" sx={{ boxShadow: 'none', width: '100%', height: '10vh' }}>
                    Закрыть
                </Button>
            </Grid>
        </Grid>
    );
};

export default WaitActions;
