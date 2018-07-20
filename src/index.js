import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './bootstrap-grid.min.css'
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux'
import RootReducer from './reducers/index'

const store = createStore(RootReducer)

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
