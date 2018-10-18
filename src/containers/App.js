import React from 'react';
import { Provider } from 'react-redux';
import Layout from '../components/Layout';

import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'

import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import configureStore from '../store';

import { CSSPlugin, AttrPlugin } from "gsap/all";
import loader from '../components/loader';

const pluginsFix = [CSSPlugin, AttrPlugin];

const history = createHistory();

const store = configureStore(history);

let persistor = persistStore(store)

const App = () => (
	<Provider store={store}>
		<PersistGate loading={loader()} persistor={persistor}>
			<ConnectedRouter history={history}>
				<Layout />
			</ConnectedRouter>
		</PersistGate>
	</Provider>
);

export default App;
