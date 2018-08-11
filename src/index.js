import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './bootstrap-grid.min.css'
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux'
import RootReducer from './reducers/index'

import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'

import configureStore from './store';


const history = createHistory();

const store = configureStore(history);
// const store = createStore(RootReducer)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
