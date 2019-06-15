import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';
import userIsAuthenticated from './RouterAuth';

export const RouteProvider = () => (
  <Switch>
    {routes.map(route => (
      <Route
        key={route.path}
        exact={route.exact}
        path={route.path}
        component={(route.private) ? userIsAuthenticated(route.component) : route.component}
      />
    ))}
    {/* <Redirect from={redirect.from} to={formatMessage(redirect.to)} /> */}
  </Switch>
);

export default RouteProvider;
