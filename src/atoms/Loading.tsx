import { CircularProgress, Theme } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react'

const Loading = (): JSX.Element => {
    const useStyles = makeStyles((theme: Theme) => ({
        loadingStyle: {
            margin: '50%',
            marginTop: '20%',
            padding: 'auto'
        },
    }));
    const classes = useStyles();
    return (<div className={classes.loadingStyle}>
        <CircularProgress />
    </div>)
}
export default Loading;