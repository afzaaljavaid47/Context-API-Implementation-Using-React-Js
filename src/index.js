import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LazyLoad from './LazyLoad';
import Fragment from './Fragment';
import Context from './Context';
import ReactHooks from './ReactHooks';
import StopWatch from './StopWatch';
import {BrowserRouter} from 'react-router-dom';
import RouteDynamic from './RouteDynamic';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <RouteDynamic/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
