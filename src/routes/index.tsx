import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';
import Main from '../layout/Main';
import Restaurante from '../pages/Restaurante';
import { path } from './RoutePaths';

const Routes: React.FC = () => (
  <Switch>
    <Route path={path.login} exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/reset-password" component={ResetPassword} />

    <Route path="/profile" component={Profile} isPrivate />
    <Route
      path={path.dashboard}
      component={Dashboard}
      isPrivate
      layout={Main}
    />
    <Route
      path={path.restaurante}
      component={Restaurante}
      isPrivate
      layout={Main}
    />
  </Switch>
);
export default Routes;
