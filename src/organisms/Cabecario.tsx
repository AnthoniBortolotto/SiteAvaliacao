import { AppBar, Button, colors, createMuiTheme, createStyles, Grid, makeStyles, withStyles, WithStyles,} from '@material-ui/core';
import React, { Component } from 'react';
import { Link} from 'react-router-dom';

export interface Props extends WithStyles<typeof styles> {

}

export interface State {

}

const styles = (theme:any) => createStyles({
    linksBtnsCabecarioStyle:{
        '&:hover': {
            textDecoration: 'none'
        },
    }
})

class Cabecario extends React.Component<Props, State> {
    
    render() {
        const { classes } = this.props;
        return (
            <AppBar color="primary" variant="outlined" position="static">
                <Grid container direction="row" justify="space-between">
                    <Grid item className="navbar-dark nav menu">
                    </Grid>
                </Grid>
            </AppBar>
        );
    }
}

export default withStyles(styles)(Cabecario);