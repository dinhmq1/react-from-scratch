import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import NotFound from './NotFound';

const App = () => (
  <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/home' component={Home} />
        <Route component={NotFound} />
      </Switch>
  </BrowserRouter>
);

render(<App />, document.getElementById('app'));
