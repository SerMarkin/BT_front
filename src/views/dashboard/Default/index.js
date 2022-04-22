import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import EarningCard from './EarningCard';
import { gridSpacing } from 'store/constant';
import ListGuests from './components/ListGuests';

// ==============================|| DEFAULT ||============================== //

const listGuestsWait = {
    name: 'wait',
    rows: [
        { id: 1, status: 'wait', name: 'Павел', enterTime: '18:20', guests: 5, bills: [] },
        { id: 2, status: 'wait', name: 'Андрей', enterTime: '18:30', guests: 6, bills: [] }
    ],
    title: 'Ожидание'
};
const listGuestsActive = {
    name: 'active',
    rows: [
        { id: 3, status: 'active', name: 'Игнат', enterTime: '18:20', guests: 7, bills: [{ id: 1, billPict: null, billSum: 510 }] },
        { id: 4, status: 'active', name: 'Мария', enterTime: '18:30', guests: 1, bills: [{ id: 2, billPict: null, billSum: 540 }] }
    ],
    title: 'Активные'
};
const listGuestsComplete = {
    name: 'complete',
    hideRows: true,
    rows: [
        { id: 5, status: 'complete', name: 'Екатирина V', enterTime: '18:20', guests: 2, bills: [{ id: 3, billPict: null, billSum: 640 }] },
        { id: 6, status: 'complete', name: 'Григорий', enterTime: '18:30', guests: 3, bills: [{ id: 4, billPict: null, billSum: 780 }] }
    ],
    title: 'Завершенные'
};

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <EarningCard isLoading={isLoading} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={4}>
                        <ListGuests isLoading={isLoading} {...listGuestsWait} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={4}>
                        <ListGuests isLoading={isLoading} {...listGuestsActive} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={4}>
                        <ListGuests isLoading={isLoading} {...listGuestsComplete} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
