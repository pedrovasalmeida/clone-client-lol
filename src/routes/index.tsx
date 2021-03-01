/** Packages */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

/** Pages */
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import CleanPage from '../pages/CleanPage';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/clean" component={CleanPage} />

    <Route path="/" component={NotFound} />
  </Switch>
);

export default Routes;
