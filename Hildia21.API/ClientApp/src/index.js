/* eslint-disable */
// import "pretty-checkbox/dist/pretty-checkbox.min.css";
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import {App} from './App'
import registerServiceWorker from './registerServiceWorker'
import {Provider} from 'react-redux'
import configureStore from "./store"
import axios from 'axios'

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');
const store = configureStore();

axios.defaults.baseURL = 'https://localhost:44398/api/People';
axios.defaults.headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement);

registerServiceWorker();