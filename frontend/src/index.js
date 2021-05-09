import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './redux/store'

import App from './App'

import 'bootstrap/dist/css/bootstrap.css';
import './fontawesome';
import 'react-toastify/dist/ReactToastify.css';

const rootElement = document.getElementById('root')
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
)