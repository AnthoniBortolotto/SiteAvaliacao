import { AppBar, Box, Button, colors, createMuiTheme, createStyles, Grid, Link, makeStyles, Tab, Tabs, Theme, Typography, withStyles, WithStyles, } from '@material-ui/core';
import React, { Component, lazy, Suspense } from 'react';

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
    const classes = useStyles();
    const [TabSelecionada, setTab] = React.useState(1);

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
                    <Tab className={classes.TabNormalStyle} label="Home" />
                    <Tab className={classes.TabNormalStyle} label="Technology" />
                    <Tab className={classes.TabNormalStyle} label="Science" />
                </Tabs>
            </AppBar>
        </header>
        <section>
            <Suspense fallback={<div></div>}>
                {TabSelecionada === 1 && <Home />}
                {TabSelecionada === 2 && <Technology />}
                {TabSelecionada === 3 && <Science />}
            </Suspense>
        </section>
    </>
    );
}