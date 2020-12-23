import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';
import { useRestaurante } from '../hooks/restaurante';
import RouteWithLayout from './RouteWithLayout';
import { path } from './RoutePaths';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
  layout?: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();
  const { restaurante } = useRestaurante();
  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        // redirecionamento normal
        if (isPrivate === !!user) {
          if (
            restaurante.nome ||
            rest.path === path.restaurante ||
            !isPrivate
          ) {
            return <RouteWithLayout component={Component} {...rest} />;
          }
          return (
            <Redirect
              to={{
                pathname: path.restaurante,
                state: { from: location },
              }}
            />
          );
        }
        return (
          <Redirect
            to={{
              pathname: isPrivate ? path.login : path.dashboard,
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};
export default Route;
