import './index.css';
import { Button, Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
/**
 * 
 * @returns 
        <div className="card-footer">
            <h3>Контакты</h3>
            <p>{'tel'}</p>
            <br />
            <h3>E-mail</h3>
            <p>kadil12353@gmail.com</p>
            <br />
            <h3>42</h3>
        </div>
 */
const InfoPanel = () => {
    const theme = useTheme();
    return (
        <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
            <Grid item xs={12}>
                <Grid container sx={{ minHeight: 'calc(80vh)', background: theme.palette.grey[900], p: 2 }}>
                    <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                        <Stack spacing={2}>
                            <Typography variant="h3">Контакты</Typography>
                            <Typography variant="p">tel</Typography>
                            <Typography variant="h3">E-mail</Typography>
                            <Typography variant="p">kadil12353@gmail.com</Typography>
                            <Typography variant="h3">42</Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default InfoPanel;
