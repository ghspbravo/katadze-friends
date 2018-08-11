import React from 'react';
import { Provider } from 'react-redux';
import Layout from '../components/Layout';

import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'

import configureStore from '../store';


const history = createHistory();

const store = configureStore(history);

const App = () => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Layout />
		</ConnectedRouter>
	</Provider>
);

export default App;
