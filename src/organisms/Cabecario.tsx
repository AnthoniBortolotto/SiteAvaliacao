import { AppBar, Box, Button, colors, createMuiTheme, createStyles, Grid, Link, makeStyles, Tab, Tabs, Theme, Typography, withStyles, WithStyles, } from '@material-ui/core';
import React, { Component, lazy, Suspense } from 'react';
import { useHistory } from "react-router-dom";

const Home = lazy(() => import('../pages/Home'));
const Science = lazy(() => import('../pages/Science'));
const Technology = lazy(() => import('../pages/Technology'));

const useStyles = makeStyles((theme: Theme) => ({
    headerStyle: {
        background: "#ffffff"
    },
    AppBarStyle: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    TabTituloStyle: {
        width: '66%'
    },
    TabNormalStyle: {
        width: '11%',
    }
}));

export default function NavTabs() {
    let history = useHistory();
    const classes = useStyles();
    let TabInicial:number;
    if(window.location.pathname === '/Technology') TabInicial = 2
    else if(window.location.pathname === '/Science') TabInicial = 3
    else TabInicial = 1;
    const [TabSelecionada, setTab] = React.useState(TabInicial);

    const handlerChange = (event: React.ChangeEvent<{}>, Tab: number) => {
        setTab(Tab);
    };

    return (<>

        <header className={classes.headerStyle}>
            <AppBar color='inherit' position="static">

                <Tabs
                    variant="standard"
                    value={TabSelecionada}
                    onChange={handlerChange}
                    aria-label="nav tabs example"
                >
                    <Typography variant="h3" className={classes.TabTituloStyle}>Tomorrow News</Typography>
                    <Tab className={classes.TabNormalStyle} onClick={() => {history.push('/')}} label="Home" />
                    <Tab className={classes.TabNormalStyle} onClick={() => {history.push('/Technology')}} label="Technology" />
                    <Tab className={classes.TabNormalStyle} onClick={() => {history.push('/Science')}} label="Science" />
                </Tabs>
            </AppBar>
        </header>
    </>
    );
}