import React, { lazy, Suspense } from 'react'
import Noticia from '../molecules/Noticia';
import Loading from '../atoms/Loading';
import { Button, createStyles, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Link, Theme, Typography, WithStyles } from '@material-ui/core';
import withStyles from '@material-ui/styles/withStyles';
const CardNoticia = lazy(() => import('../organisms/CardNoticia'));

export interface ExibicaoCardProps extends WithStyles<typeof styles> {
    Noticias: Noticia[]
}

export interface ExibicaoCardState {
    dialogOpen: boolean,
    dialogId: number
}

const styles = (theme: Theme) => createStyles({
    GridItemCardStyle: {
        marginRight: '-1%',
    },
    DialogImageStyle: {
        width: '100%'
    },
    DialogBtnStyle: {
        margin: 'auto',
        width: '0%',
        paddingLeft: '50%',
        paddingRight: '50%',
    },
    DialogBtnTextStyle: {
        [theme.breakpoints.up('xs')]: {
            padding: '90%',
            paddingTop: '0%',
            paddinBottom: '0%'
        },
        [theme.breakpoints.up('md')]: {
            padding: '40%',
            paddingTop: '0%',
            paddinBottom: '0%'
        },
        [theme.breakpoints.up('lg')]: {
            padding: '0%',
            paddingTop: '0%',
            paddinBottom: '0%'
        },
    },
    DialogTitleStyle: {
        [theme.breakpoints.up('xs')]: {
            fontSize: '1.5rem'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2.25rem'
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '1.25rem'
        },
    },
    DialogTextStyle: {
        [theme.breakpoints.up('xs')]: {
            fontSize: '1.5rem'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.75rem'
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '1.25rem'
        },
    }
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
                    <Grid item lg={3} md={4} sm={6} xs={12} key={index} >
                        <Suspense fallback={<Loading />}>
                            <CardNoticia noticia={noticia} onClick={() => this.setState({ dialogId: index, dialogOpen: true })} />
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
                <DialogTitle><Typography variant="h5" className={classes.DialogTitleStyle}>{this.props.Noticias[this.state.dialogId].titulo}</Typography></DialogTitle>
                <DialogContent>
                    <img className={classes.DialogImageStyle} alt="Imagem da notícia" src={this.props.Noticias[this.state.dialogId].urlImagemResolucaoBoa} />
                    <DialogContentText className={classes.DialogTextStyle}> 
                        {this.props.Noticias[this.state.dialogId].abstract}
                    </DialogContentText>
                    <DialogContentText className={classes.DialogTextStyle}>
                        News Link: <Link target="_blank" href={this.props.Noticias[this.state.dialogId].url}>{this.props.Noticias[this.state.dialogId].url}</Link>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button className={classes.DialogBtnStyle} onClick={() => this.setState({ dialogOpen: false })} color="primary">
                        <Typography className={classes.DialogBtnTextStyle}>Close</Typography>
                    </Button>
                </DialogActions>
            </Dialog>}
        </>
        );
    }
}
export default withStyles(styles)(ExibicaoCard);
