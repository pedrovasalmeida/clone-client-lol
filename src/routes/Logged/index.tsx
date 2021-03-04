/** Packages */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import BlurredBackground from '../../components/BlurredBackground';
import SocialMenu from '../../components/SocialMenu';

/** Pages */
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';

import { Wrapper } from './styles';

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
        <Wrapper>
          <Route path={route.path} exact={route.exact}>
            {route.backgroundUrl && (
              <BlurredBackground bgUrl={route.backgroundUrl} />
            )}
            {route.component}
            <SocialMenu />
          </Route>
        </Wrapper>
      ))}
    </Switch>
  );
};

export default Routes;
