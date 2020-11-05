import React from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import { UnauthenticatedRoute } from './templates/UnauthenticatedRoute';
// import { AuthenticatedRoute } from './templates/AuthenticatedRoute';

import { Home } from './pages/Home';

export function AppRouter() {
  const childProps = {};
  return (
    <Router>
      <Switch>
        <UnauthenticatedRoute component={Home} props={childProps} />
      </Switch>
    </Router>
  );
}
