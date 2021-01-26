import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Rodape from '../organisms/Rodape';
import Cabecario from '../organisms/Cabecario';
import "../atoms/css/bootstrap.min.css";
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
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

      <Cabecario/>
      <Suspense fallback={<div></div>}>
        <Switch>

        </Switch>
      </Suspense>

      <Rodape />
    </ThemeProvider>
  </BrowserRouter>
  ,
  document.getElementById('app')
);



