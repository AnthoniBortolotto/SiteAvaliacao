import { Card, CardContent, CardMedia, createStyles, Grid, Theme, Typography, WithStyles, withStyles } from '@material-ui/core';
import React from 'react'
import CardNoticias from '../templates/ExibicaoCard';
import Noticia from '../molecules/Noticia';
import NewsService from '../Services/NewsService';

export interface ScienceProps extends WithStyles<typeof styles> {

}

export interface ScienceState {
    Noticias: Array<Noticia>
}
const styles = (theme: Theme) => createStyles({
    sectionNoticiasScienceStyle: {
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: '3%'

    }
})
class Science extends React.Component<ScienceProps, ScienceState> {
    constructor(props: ScienceProps) {
        super(props);
        this.state = {
            Noticias: []
        }
        this.atualizarProdutos();
    }
    private atualizarProdutos() {
        NewsService.noticiasCiencia()
            .then(res => {
                this.setState({ Noticias: res })
            })
    }
    render(): JSX.Element {
        const { classes } = this.props
        return (<Grid container className={classes.sectionNoticiasScienceStyle}>
            <CardNoticias Noticias={this.state.Noticias}/>
        </Grid>)
    }
}

export default withStyles(styles)(Science);