import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import React, { lazy, Suspense } from 'react'
import Noticia from '../molecules/Noticia';
import Loading from '../atoms/Loading';
const ImagemCartao = lazy(() => import('../atoms/ImagemCartao'));

interface CardNoticiaProps {
    noticia: Noticia
}

const useStyles = makeStyles({
    CardStyle: {
        border: 'none',
        height: '90%',
        marginTop: '4%',
        transition: 'ease-in 0.5s',
        width: '75%',
        
        zIndex: 1,
        '&:hover': {
            width: '85%',
            transition: 'ease-out 0.5s',
            textDecoration: 'underline',
            fontSize: '1.1rem'
        }
    }
})
function CardNoticia(props: CardNoticiaProps): JSX.Element {
    const classes = useStyles();

    return (
        <Card component="button" className={classes.CardStyle}>
            <Suspense fallback={<Loading/>}>
            <ImagemCartao url={props.noticia.urlImagem} />
            </Suspense>
            <CardContent>
                <Typography component="p">{props.noticia.titulo}</Typography>
            </CardContent>
        </Card>
    )
}
export default CardNoticia;
