import { Theme } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
    headerStyle: {
        background: "#ffffff",
        marginTop: '-0.5%',
        marginLeft: '-0.5%',
        width: '101%'
    },
    AppBarStyle: {
    },
    TituloCabecalhoStyle: {
        textAlign: 'center'
    },
    TabNormalStyle: {
        
        [theme.breakpoints.up('xs')]: {
            width: '33%',
        },
        [theme.breakpoints.up('md')]: {
            width: '15%',
        },
        [theme.breakpoints.up('lg')]: {
            width: '11%',
        },
    }
}));

export default function NavTabs() {
    let history = useHistory();
    const classes = useStyles();
    let TabInicial:number;
    if(window.location.pathname === '/Technology') TabInicial = 1
    else if(window.location.pathname === '/Science') TabInicial = 2
    else TabInicial = 0;
    const [TabSelecionada, setTab] = React.useState(TabInicial);

    const handlerChange = (event: React.ChangeEvent<{}>, Tab: number) => {
        setTab(Tab);
    };

    return (
        <header className={classes.headerStyle}>
            <AppBar color='inherit' position="static">
            <Typography variant="h3" className={classes.TituloCabecalhoStyle}>Tomorrow News</Typography>
                <Tabs
                    variant="standard"
                    value={TabSelecionada}
                    onChange={handlerChange}
                >
                    
                    <Tab component="p" className={classes.TabNormalStyle} onClick={() => {history.push('/')}} label="Home" />
                    <Tab component="p" className={classes.TabNormalStyle} onClick={() => {history.push('/Technology')}} label="Technology" />
                    <Tab component="p" className={classes.TabNormalStyle} onClick={() => {history.push('/Science')}} label="Science" />
                </Tabs>
            </AppBar>
        </header>
    );
}