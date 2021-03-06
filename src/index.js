import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"; 
import Store from "./store";
import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from "styled-components";
import { PersistGate } from "redux-persist/integration/react";

const { persistor, store } = Store();

const GlobalStyle = createGlobalStyle`
  html {
    background-color: #2E4158;
    box-sizing: border-box;
    transition: all 0.5s ease-in;
  }
`;


ReactDOM.render(
<Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
      <GlobalStyle />
      <App />
    </PersistGate>
</Provider>,
 document.getElementById('root')
 );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
