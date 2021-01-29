import Grid from "@material-ui/core/Grid";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/styles/createStyles/createStyles";
import withStyles from "@material-ui/styles/withStyles/withStyles";
import React from "react";
import Noticia from "../molecules/Noticia";
import NewsService from "../Services/NewsService";
import CardNoticias from "../templates/CardNoticias";

export interface TechnologyProps extends WithStyles<typeof styles> {

}

export interface TechnologyState {
    Noticias: Array<Noticia>
}
const styles = (theme: Theme) => createStyles({
    GridNoticiasTechnologyStyle: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'

    }
})
class Technology extends React.Component<TechnologyProps, TechnologyState> {
    constructor(props: TechnologyProps) {
        super(props);
        this.state = {
            Noticias: []
        }
        this.atualizarProdutos();
    }
    private atualizarProdutos() {
        NewsService.noticiasTecnologia()
            .then(res => {
                this.setState({ Noticias: res })
            })
    }
    render(): JSX.Element {
        const { classes } = this.props
        return (<Grid container className={classes.GridNoticiasTechnologyStyle}>
            <CardNoticias Noticias={this.state.Noticias}/>
        </Grid>)
    }
}

export default withStyles(styles)(Technology);