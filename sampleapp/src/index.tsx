import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Game from './components/Game';
import ApiComponent from './components/ApiComponent';
import ReduxComponent from './components/ReduxComponent';

import {createStore} from 'redux';
import { Provider } from "react-redux";
import rootReducer from './reducers/rootReducer';
import RouterHome from './components/RouterHome';

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><RouterHome/></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
