import React from 'react';
import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import Layout from '../components/Layout';
import Main from '../components/Main';

const App = ({ store }) => (
  <Provider store={store}>
    <Layout>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </Layout>
  </Provider>

);

export default App;
