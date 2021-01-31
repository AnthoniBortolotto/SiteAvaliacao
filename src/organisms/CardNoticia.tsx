import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import React, { lazy, Suspense } from 'react'
import Noticia from '../molecules/Noticia';
import Loading from '../atoms/Loading';
import { Theme } from '@material-ui/core';
const ImagemCartao = lazy(() => import('../molecules/ImagemCartao'));

interface CardNoticiaProps {
    noticia: Noticia
    onClick: Function
}

const useStyles = makeStyles((theme: Theme) => ({
    CardStyle: {
        height: '90%',
        marginTop: '4%',
        [theme.breakpoints.up('xs')]: {
            width: '100%',
            '&:hover': {
                textDecoration: 'underline',
            }
        },
        // [theme.breakpoints.up('sm')]: {
        //     width: '75%%',
        //     '&:hover': {
        //         textDecoration: 'underline',
        //     }
        // },
        [theme.breakpoints.up('sm')]: {

            transition: 'ease-in 0.5s',
            width: '75%',
            '&:hover': {
                width: '85%',
                transition: 'ease-out 0.5s',
                textDecoration: 'underline',
                fontSize: '1.1rem'
            }
        },
        

    }
}))
function CardNoticia(props: CardNoticiaProps): JSX.Element {
    const classes = useStyles();

    return (
        <Card onClick={() => props.onClick()} className={classes.CardStyle}>
            <Suspense fallback={<Loading />}>
                <ImagemCartao url={props.noticia.urlImagem} />
            </Suspense>
            <CardContent>
                <Typography component="p">{props.noticia.titulo}</Typography>
            </CardContent>
        </Card>
    )
}
export default CardNoticia;
