import React from 'react';
import ReactDOM from 'react-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Provider } from 'react-redux';

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme';

import App from './App';

import { store } from './store'

ReactDOM.render(
    <Provider store={store} >
        <ThemeProvider theme={theme} >
            <CssBaseline />
            <ToastContainer />
            <App />
        </ThemeProvider >
    </Provider >,
    document.getElementById('root')
);
