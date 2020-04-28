import React from 'react';
import ReactDOM from 'react-dom';

import { RequestProvider } from "react-request-hook";
import axios from "axios";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// define axios configuration
// in the config of our axios instance, we can also define other options such as the default timeout for requests or custom headers.
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api"
})

// we then wrap the app with the RequestProvider while providing it with axiosInstance as the value.
// now our app is able to use the the request hook
ReactDOM.render(
  <React.StrictMode>
  <RequestProvider value={axiosInstance}>
    <App />
  </RequestProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
