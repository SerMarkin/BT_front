import { Typography, Grid, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ActiveActions from './Actions/ActiveActions';
import WaitActions from './Actions/WaitActions';
//match.params.id
const OrderActions = () => {
    const theme = useTheme();
    const { id } = useParams();

    const [order, setOrder] = useState({});

    useEffect(() => {
        if (id < 3) {
            setOrder({ id: 1, status: 'wait', name: 'Павел', enterTime: '18:20', guests: 5, bills: [] });
        } else if (id < 5) {
            setOrder({
                id: 3,
                status: 'active',
                name: 'Игнат',
                enterTime: '18:20',
                guests: 7,
                bills: [{ id: 1, billPict: null, billSum: 510 }]
            });
        } else if (id < 7) {
            setOrder({
                id: 5,
                status: 'complete',
                name: 'Екатирина V',
                enterTime: '18:20',
                guests: 2,
                bills: [{ id: 3, billPict: null, billSum: 640 }]
            });
        }
    }, [id]);

    return (
        <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={12}>
                <Typography>{order.name}</Typography>
                <Typography>{order.enterTime}</Typography>
            </Grid>
            {order.status === 'wait' ? <WaitActions /> : order.status === 'active' ? <ActiveActions /> : null}
        </Grid>
    );
};

export default OrderActions;
