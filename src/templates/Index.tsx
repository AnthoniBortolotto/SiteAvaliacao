import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Cabecario from '../organisms/Cabecario';
import "../atoms/css/bootstrap.min.css";
import {createMuiTheme, ThemeProvider } from '@material-ui/core';
import Loading from '../atoms/Loading';
import Home from '../pages/Home';
import Science from '../pages/Science';
import Technology from '../pages/Technology';
const Rodape = lazy(() => import('../organisms/Rodape'));
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1565c0'
    },
    secondary: {
      main: '#1565c0'
    }
  },
});

ReactDOM.render(

  <BrowserRouter>
    <ThemeProvider theme={theme} >
      <Cabecario />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/Science" component={Science} />
          <Route exact={true} path="/Technology" component={Technology} />
        </Switch>
      <Suspense fallback={<></>}>
        <Rodape />
      </Suspense>
    </ThemeProvider>
  </BrowserRouter>

  ,
  document.getElementById('app')
);



