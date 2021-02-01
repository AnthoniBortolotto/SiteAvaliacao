import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cabecario from '../organisms/Cabecario';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Loading from '../atoms/Loading';
import Rodape from '../organisms/Rodape';
const Home = lazy(() => import('../pages/Home'));
const Science = lazy(() => import('../pages/Science'));
const Technology = lazy(() => import('../pages/Technology'));
const NotFound = lazy(() => import('../pages/NotFound'));
//import Science from '../pages/Science';
//import Technology from '../pages/Technology';
//const Rodape = lazy(() => import('../organisms/Rodape'));
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
        <Suspense fallback={<Loading />}>
        <Switch>

          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/Science" component={Science} />
          <Route exact={true} path="/Technology" component={Technology} />
          <Route component={NotFound}/>
        </Switch>
        </Suspense>
        <Rodape />
      </ThemeProvider>
    </BrowserRouter>


  ,
  document.getElementById('app')
);



