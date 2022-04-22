import { Typography, Grid, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
//match.params.id
const ActiveActions = ({ id, status, name, enterTime, guests, bills }) => {
    const theme = useTheme();

    return (
        <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={12}>
                <Button variant="contained" color="primary" sx={{ boxShadow: 'none', width: '100%', color: theme.palette.grey[50] }}>
                    Добавить чек
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" color="error" sx={{ boxShadow: 'none', width: '100%' }}>
                    Закрыть счет
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" color="primary" sx={{ boxShadow: 'none', width: '100%' }}>
                    Вернуться
                </Button>
            </Grid>
        </Grid>
    );
};

export default ActiveActions;
