import CardMedia from '@material-ui/core/CardMedia';
import React from 'react'

interface ImagemCartaoprops{
    url:string
}

function ImagemCartao(props:ImagemCartaoprops): JSX.Element {

    return (
            <CardMedia component="img" image={props.url} alt="Imagem da notícia" />
    )
}
export default ImagemCartao;
