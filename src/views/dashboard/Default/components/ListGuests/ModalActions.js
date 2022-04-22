import { Modal } from '@mui/material';
import { Box, Typography, Grid, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const style = {
    position: 'absolute',
    top: '10%',
    left: '0%',
    width: '100%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};

const ModalActions = ({ open, onClose }) => {
    const theme = useTheme();
    console.log(theme);
    return (
        <Modal open={open} onClose={onClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style}>
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
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={onClose}
                            sx={{ boxShadow: 'none', width: '100%', height: '10vh' }}
                        >
                            Закрыть
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
};

export default ModalActions;
