import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from './components/Landing/Landing';
import Search from './components/Search/Search';
import NotFound from './NotFound';

const App = () => (
  <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/search' component={Search} />
        <Route component={NotFound} />
      </Switch>
  </BrowserRouter>
);

render(<App />, document.getElementById('app'));
