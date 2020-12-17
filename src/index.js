/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import './assets/web/css/font-awesome-v4.7.0.css'
=======
import './assets/css/font-awesome-v4.7.0.css'
>>>>>>> 4b2aafe8c6f914da9e8b239a92b338bb1c4d408b
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from 'theming';
import  './App.css'

const theme = {
    darkTheme:{
        background: '#000',
        color: '#fff'
    }
};

ReactDOM.render(
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
