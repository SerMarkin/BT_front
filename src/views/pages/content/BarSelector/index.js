// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, Grid, Stack, Typography, Card, CardMedia } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import DescriptionText from 'ui-component/formatTexts/DescriptionText';
import { StarBorder } from '@mui/icons-material';
import './index.css';
import { useEffect, useState } from 'react';
import { GET } from 'utils/API';

var items = [
    {
        name: 'Random Name #1',
        image: 'https://images.restoclub.ru/uploads/place/c/6/7/0/c670f3405f20b2c8513908b467548849_w958_h835--big.jpg',
        description: 'Probably the most random thing you have ever seen!'
    },
    {
        name: 'Random Name #2',
        image: 'https://media.istockphoto.com/photos/stylish-wall-full-of-spirit-bottles-in-a-bar-picture-id1265468202?k=20&m=1265468202&s=170667a&w=0&h=CGU_sOc80mUVBccurrW6stVSwEKcHvqxUIYTaos1-ZI=',
        description: 'Hello World!'
    }
];
function Item(props) {
    return (
        <Card raised className="Banner">
            <CardMedia component="img" className="Media" image={props.item.image} title={'Test'}></CardMedia>
        </Card>
    );
}

const descBar = `
bar — это фантазия на тему бара будущего. Не киберпанк, а логичное завтра, к которому мы стремимся как часть
осознанного общества. Бар стоит на трех столпах: инновации, гостеприимство и связь с природой. Они тонкой нитью
пронизывают каждую деталь в баре от стен из утрамбованной земли до деликатного стекла Баккара. Мы не просто
оснастили бар самой современной барной лабораторией, где при помощи новейшего оборудования создаем уникальные
вкусы и ароматы, но и с присущей нашим барменам скрупулезностью разработали собственный подход к детальной
проработке качества напитков. Работая над созданием атмосферы, располагающей к общению, мы создали уникальную
барную станцию, не имеющую аналогов в мире. Совместно с компанией Behind Bars из Осло мы придумали как комфортно
расположиться гостям, чтобы оставаться в самом центре событий.`;

const BarSelector = () => {
    const theme = useTheme();

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [barInfo, setBarInfo] = useState(null);

    useEffect(() => {
        console.log('response');
        const getData = async () => {
            try {
                const response = await GET('/short/nextbar');
                console.log(response);
                setBarInfo(response.data);
            } catch (e) {
                console.log(e);
                setError(e);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, []);

    return (
        <Grid container alignItems="center" justifyContent="center" sx={{ minHeight: '100vh' }}>
            <Grid item xs={12} sm={12} md={6}>
                <Grid container justifyContent="flex-start" alignItems="center" sx={{ minHeight: 'calc(100vh)', p: 2, maxWidth: '100%' }}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Grid container direction={'column'} alignItems="center" justifyContent="center">
                            <Grid item>
                                <Stack alignItems="center" justifyContent="center" spacing={1}>
                                    <Typography color={theme.palette.secondary.main} gutterBottom variant={'h2'} textAlign={'center'}>
                                        Bar
                                    </Typography>
                                    <Typography variant="caption" fontSize="16px" textAlign={'center'}>
                                        слоган бара
                                    </Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={12}>
                                <Carousel className="Example">
                                    {items.map((item, i) => (
                                        <Item key={i} item={item} />
                                    ))}
                                </Carousel>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <DescriptionText text={descBar} />
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            className="AnimeButtom"
                            startIcon={<StarBorder />}
                            color="primary"
                            sx={{ boxShadow: 'none', width: '100%' }}
                        >
                            Получить скидку в баре
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="success" sx={{ boxShadow: 'none', width: '100%' }}>
                            Посетить
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="text" sx={{ boxShadow: 'none', width: '100%' }}>
                            Посмотреть ещё
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default BarSelector;
