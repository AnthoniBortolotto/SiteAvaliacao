import { Card, CardContent, CardMedia, makeStyles, createStyles, Grid, Link, Theme, Typography, WithStyles, withStyles, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';
import React, { MouseEventHandler } from 'react'
import Noticia from '../molecules/Noticia';
import NewsService from '../Services/NewsService';

export interface CardNoticiasProps extends WithStyles<typeof styles>{
    Noticias: Noticia[]
}

export interface CardNoticiasState {
    dialogOpen: boolean,
    dialogId: number
}

const styles = () => createStyles({
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

    },
    DialogImageStyle: {
        width: '100%'
    }
    // CardModalMediaStyle:{

    // }
})
 
class CardNoticias extends React.Component<CardNoticiasProps, CardNoticiasState> {

    constructor(props:CardNoticiasProps){
        super(props);
        this.state = {
            dialogOpen: false,
            dialogId: -1
        }
    }
    private cards(){
        const {classes} = this.props;
        return (
            this.props.Noticias.map((noticia, index) => {
                return (
                <Grid item xs={3} className={classes.gridItemStyle}>
                    <Card component="button" key={index} onClick={() => this.setState({dialogId: index, dialogOpen: true})} className={classes.CardStyle}>
                        <CardMedia component="img" image={noticia.urlImagem} alt="Imagem da notícia" />
                        <CardContent>
                            <Typography component="p">{noticia.titulo}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                );
            }))
    }
    render() { 
        const {classes} = this.props;
        return (<>
            {this.cards()}
            {this.state.dialogId !== -1 && <Dialog
                open={this.state.dialogOpen}
                keepMounted
                onClose={() => this.setState({dialogOpen: false})}
            >
                <DialogTitle>{this.props.Noticias[this.state.dialogId].titulo}</DialogTitle>
                <DialogContent>
                    <img className={classes.DialogImageStyle} alt="Imagem da notícia" src={this.props.Noticias[this.state.dialogId].urlImagemResolucaoBoa} />
                    <DialogContentText>
                        {this.props.Noticias[this.state.dialogId].abstract}
              </DialogContentText>
              <DialogContentText>
                        News Link: <Link target="_blank" href={this.props.Noticias[this.state.dialogId].url}>{this.props.Noticias[this.state.dialogId].url}</Link>
              </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => this.setState({dialogOpen: false})} color="primary">
                        Close
              </Button>
                </DialogActions>
            </Dialog>}
            </>
        );
    }
}
export default withStyles(styles)(CardNoticias);
