import React from 'react';
import { ApolloProvider } from 'react-apollo';

import { Router, Route, browserHistory } from 'react-router';

import Scroll from 'react-scroll';

import client from './apolloClient';
import store from './store';

import AsyncComponent from './components/AsyncComponent';

const scroll = Scroll.animateScroll;

const App = AsyncComponent(() => import('./pages/App'))


const routes = async () => {
  return (
    <ApolloProvider store={store} client={client}>
      <Router onUpdate={scroll.scrollToTop} history={browserHistory}>
        <Route path="/" component={App}>
        </Route>
      </Router>
    </ApolloProvider>
  )
}

export default routes;
