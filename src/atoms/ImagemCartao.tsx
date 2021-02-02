import CardMedia from '@material-ui/core/CardMedia';
import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react'

interface ImagemCartaoprops{
    url:string
}
const useStyles = makeStyles(() => ({
    CardMediaStyle: {
        '&:hover': {
            cursor: 'pointer'
        }
    }
}))

function ImagemCartao(props:ImagemCartaoprops): JSX.Element {
    const classes = useStyles();
    return (
            <CardMedia className={classes.CardMediaStyle} component="img" image={props.url} alt="Imagem da notícia" />
    )
}
export default ImagemCartao;
