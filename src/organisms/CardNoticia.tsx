import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import React, { lazy, Suspense } from 'react'
import Noticia from '../molecules/Noticia';
import Loading from '../atoms/Loading';
import { Theme } from '@material-ui/core';
const ImagemCartao = lazy(() => import('../atoms/ImagemCartao'));

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
        [theme.breakpoints.up('sm')]: {

            transition: 'ease-in 0.5s',
            width: '75%',
            '&:hover': {
                fontSize: '1.1rem',
                transition: 'ease-out 0.5s',
                textDecoration: 'underline',
                width: '85%',
            }
        },
    },
    CardContentStyle: {
        '&:hover': {
            cursor: 'pointer'
        }
    }
}))
function CardNoticia(props: CardNoticiaProps): JSX.Element {
    const classes = useStyles();

    return (
        <Card onClick={() => props.onClick()} className={classes.CardStyle}>
            <Suspense fallback={<Loading />}>
                <ImagemCartao url={props.noticia.urlImagem} />
            </Suspense>
            <CardContent className={classes.CardContentStyle}>
                <Typography component="p">{props.noticia.titulo}</Typography>
            </CardContent>
        </Card>
    )
}
export default CardNoticia;
