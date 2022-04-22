import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

// material-ui
import { Button, CardActions, CardContent, Grid, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant';
import WaitRow from './WaitRow';
import ActiveRow from './ActiveRow';
import CompleteRow from './CompleteRow';
import EarningCardSkeleton from 'ui-component/cards/Skeleton/EarningCard';

// assets
import { ChevronRightOutlined, Group, Wysiwyg } from '@mui/icons-material';

// ==============================|| List Guests - Таблица гостей для барменов ||============================== //

const ListGuests = ({ isLoading, name, rows, title, hideRows }) => {
    const [countGuests, setCountGuests] = useState(0);

    useEffect(() => {
        let count = 0;
        for (let row of rows) {
            if (!!row && 'guests' in row) {
                count += row.guests;
            } else {
                count += 1;
            }
        }
        setCountGuests(count);
    }, [rows]);

    const ChoosenRow = (() => {
        switch (name) {
            case 'wait':
                return WaitRow;
            case 'active':
                return ActiveRow;
            case 'complete':
                return CompleteRow;
            default:
                return EarningCardSkeleton;
        }
    })();

    return (
        <>
            {isLoading ? (
                <SkeletonPopularCard />
            ) : (
                <MainCard content={false}>
                    <CardContent>
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12}>
                                <Grid container alignContent="center" alignItems="center" justifyContent="space-between">
                                    <Grid item>
                                        <Typography variant="h4">{title}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Grid container direction="row" alignItems="center">
                                            <Grid item>
                                                <Typography variant="h5">{rows.length}</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="h5">
                                                    <Wysiwyg />
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="h5">{countGuests}</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="h5">
                                                    <Group />
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            {!hideRows ? (
                                <Grid item xs={12}>
                                    {rows.map((row, index) => {
                                        console.log(row, index);
                                        return <ChoosenRow key={'row' + index} {...row} />;
                                    })}
                                </Grid>
                            ) : null}
                        </Grid>
                    </CardContent>
                    <CardActions sx={{ p: 1.25, pt: 0, justifyContent: 'center' }}>
                        <Button size="small" disableElevation>
                            Посмотреть все
                            <ChevronRightOutlined />
                        </Button>
                    </CardActions>
                </MainCard>
            )}
        </>
    );
};

ListGuests.propTypes = {
    isLoading: PropTypes.bool,
    title: PropTypes.string,
    name: PropTypes.string,
    rows: PropTypes.array,
    hideRows: PropTypes.bool
};

ListGuests.defaultProps = {
    rows: [],
    title: '',
    hideRows: false
};

export default ListGuests;
