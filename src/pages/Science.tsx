import { Card, CardContent, CardMedia, createStyles, Theme, Typography, WithStyles, withStyles } from '@material-ui/core';
import React from 'react'
import Noticia from '../molecules/Noticia';
import NewsService from '../Services/NewsService';

export interface ScienceProps extends WithStyles<typeof styles> {

}

export interface ScienceState {
    Noticias: Array<Noticia>
}
const styles = (theme: Theme) => createStyles({
    sectionNoticiasScienceStyle:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
        
    },
    CardStyle: {
        marginTop: '1rem',
        marginBottom: '1rem',
        transition: 'ease-in 0.5s',
        width: '21%',
        '&:hover': {
            width: '25%',
            transition: 'ease-out 0.5s',
            textDecoration: 'underline',
            fontSize: '1.1rem'
        }
    },
})
class Science extends React.Component<ScienceProps, ScienceState> {
    constructor(props:ScienceProps) {
        super(props);
        this.state = {
            Noticias: []
        }
        this.atualizarProdutos();
    }
    private atualizarProdutos(){
        NewsService.noticiasCiencia()
        .then(res => {
            this.setState({Noticias: res})
        })
    }
    private cards(): JSX.Element[]{
        const {classes} = this.props
        return(
            this.state.Noticias.map(noticia => {
                return(<Card className={classes.CardStyle}>
                    <CardMedia component="img" image={noticia.urlImagem} alt="Imagem da notícia"/>
                    <CardContent>
                        <Typography component="p">{noticia.titulo}</Typography>
                    </CardContent>
                </Card>);
            }))
    }
    render(): JSX.Element {
        const {classes} = this.props
        return(<section className={classes.sectionNoticiasScienceStyle}>
            {this.cards()}
        </section>)
    }
}

export default withStyles(styles)(Science);