import { AppBar, Box, Button, colors, createMuiTheme, createStyles, Grid, Link, makeStyles, Tab, Tabs, Theme, Typography, withStyles, WithStyles, } from '@material-ui/core';
import React, { Component } from 'react';
//@ts-ignore
import logo from "../atoms/img/logoNews.png";
interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

interface LinkTabProps {
    label?: string;
    href?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
    headerStyle: {
        background: "#ffffff"
    },
    AppBarStyle: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    TabTituloStyle:{
        width: '66%'
    },
    TabNormalStyle: {
        width: '11%',
    }
}));

export default function NavTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(1);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <header className={classes.headerStyle}>
            <AppBar color='inherit' position="static">
                
                <Tabs
                    variant="standard"
                    value={value}
                    onChange={handleChange}
                    aria-label="nav tabs example"
                >
                    <Typography variant="h3" className={classes.TabTituloStyle}>Tomorrow News</Typography>
                    <Tab className={classes.TabNormalStyle} label="Home"/>
                    <Tab className={classes.TabNormalStyle} label="Technology"/>
                    <Tab className={classes.TabNormalStyle} label="Science"/>
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={1}>
                Page One
        </TabPanel>
            <TabPanel value={value} index={2}>
                Page Two
        </TabPanel>
            <TabPanel value={value} index={3}>
                Page Three
        </TabPanel>
        </header>
    );
}