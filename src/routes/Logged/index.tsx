/** Packages */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

/** Pages */
import NotFound from '../../pages/NotFound';
import CleanPage from '../../pages/CleanPage';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={CleanPage} />

    <Route path="/" component={NotFound} />
  </Switch>
);

export default Routes;
