/** Packages */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BlurredBackground from '../../components/BlurredBackground';

/** Pages */
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';

const routes = [
  {
    id: 1,
    name: 'Home',
    path: '/',
    exact: true,
    component: <HomePage />,
    backgroundUrl: 'https://i.imgur.com/d2ZYnJq.jpg',
  },
  {
    id: 999,
    name: 'NotFound',
    path: '/',
    exact: false,
    component: <NotFound />,
    backgroundUrl: null,
  },
];

const Routes: React.FC = () => {
  return (
    <Switch>
      {routes.map(route => (
        <Route path={route.path} exact={route.exact}>
          {route.backgroundUrl && (
            <BlurredBackground bgUrl={route.backgroundUrl} />
          )}
          {route.component}
        </Route>
      ))}
    </Switch>
  );
};

export default Routes;
