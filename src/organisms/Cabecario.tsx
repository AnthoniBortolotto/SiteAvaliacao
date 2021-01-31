import { AppBar, makeStyles, Tab, Tabs, Theme, Typography} from '@material-ui/core';
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
        width: '11%',
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