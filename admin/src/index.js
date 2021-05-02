import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import App from './App.js';

import '@/styles/index.scss';

export const history = createBrowserHistory();


const container = document.getElementById("root")

if (process.env.NODE_ENV !== 'development') {
  let disFunc = () => 'console has been disabled in production mode';

  console.log = disFunc
  console.error = disFunc
  console.warn = disFunc

  Object.freeze(console);
}



ReactDOM.render(
  <App/>,
  container
);
