import { Card, CardContent, CardMedia, makeStyles, createStyles, Grid, Link, Theme, Typography, WithStyles, withStyles, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';
import React, { lazy, MouseEventHandler, Suspense } from 'react'
import Noticia from '../molecules/Noticia';
import Loading from '../organisms/Loading';
const CardNoticia = lazy(() => import('../organisms/CardNoticia'));

export interface ExibicaoCardProps extends WithStyles<typeof styles> {
    Noticias: Noticia[]
}

export interface ExibicaoCardState {
    dialogOpen: boolean,
    dialogId: number
}

const styles = () => createStyles({
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

class ExibicaoCard extends React.Component<ExibicaoCardProps, ExibicaoCardState> {

    constructor(props: ExibicaoCardProps) {
        super(props);
        this.state = {
            dialogOpen: false,
            dialogId: -1
        }
    }
    private cards() {
        const { classes } = this.props;
        return (
            this.props.Noticias.map((noticia, index) => {
                return (
                    <Grid item xs={3} key={index} onClick={() => this.setState({ dialogId: index, dialogOpen: true })} className={classes.gridItemStyle}>
                        <Suspense fallback={<Loading/>}>
                            <CardNoticia noticia={noticia} />
                        </Suspense>
                    </Grid>
                );
            }))
    }
    render() {
        const { classes } = this.props;
        return (<>
            {this.cards()}
            {this.state.dialogId !== -1 && <Dialog
                open={this.state.dialogOpen}
                keepMounted
                onClose={() => this.setState({ dialogOpen: false })}
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
                    <Button onClick={() => this.setState({ dialogOpen: false })} color="primary">
                        Close
              </Button>
                </DialogActions>
            </Dialog>}
        </>
        );
    }
}
export default withStyles(styles)(ExibicaoCard);
