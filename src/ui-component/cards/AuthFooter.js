// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
    <Stack direction="row" justifyContent="space-between">
        <Typography variant="subtitle2" component={Link} href="https://bartrip.ru" target="_blank" underline="hover">
            https://bartrip.ru
        </Typography>
    </Stack>
);

export default AuthFooter;
