import { Card, CardContent, CardMedia, makeStyles, createStyles, Grid, Link, Theme, Typography, WithStyles, withStyles } from '@material-ui/core';
import React, { MouseEventHandler } from 'react'
import Noticia from '../molecules/Noticia';
import NewsService from '../Services/NewsService';

export interface CardNoticiasProps {
    Noticias: Noticia[]
}

const useStyles = makeStyles({
    CardStyle: {
        marginTop: '1rem',
        marginBottom: '1rem',
        transition: 'ease-in 0.5s',
        width: '75%',
        border: 'none',
        zIndex: 1,
        '&:hover': {
            width: '85%',
            transition: 'ease-out 0.5s',
            textDecoration: 'underline',
            fontSize: '1.1rem'
        }
    },
    gridItemStyle: {
        marginLeft: '1%'
    },
    cardModalStyle: {
        position: 'absolute',
        width: '80%',
        zIndex: 10,
        left: '10%',
        top: '10%'

    }
    // CardModalMediaStyle:{

    // }
})


const CardNoticias = (Noticias:Noticia[]): JSX.Element[] => {
    const classes = useStyles();   
    return (
        Noticias.map((noticia, index) => {
            return (<Grid item xs={3} className={classes.gridItemStyle}>
                <Card component="button" key={index} onClick={() => handlerClick(index)} className={classes.CardStyle}>
                    <CardMedia component="img" image={noticia.urlImagem} alt="Imagem da notícia" />
                    <CardContent>
                        <Typography component="p">{noticia.titulo}</Typography>
                    </CardContent>
                </Card>
            </Grid>);
        }))

        function handlerClick(id: number): JSX.Element {
            const classes = useStyles();
            console.log(Noticias[id]);
            return (<Card className={classes.cardModalStyle}>
                <CardMedia
                    image={Noticias[id].urlImagem}
                />
                <CardContent>
                    <Typography variant="h5">{Noticias[id].titulo}</Typography>
                    <Typography component="p">{Noticias[id].abstract}</Typography>
                    <Typography component="p">Link da notícia: <Link component="button" variant="body2" href={Noticias[id].url}>{Noticias[id].url}</Link></Typography>
                </CardContent>
            </Card>);
        }
}

export default CardNoticias;