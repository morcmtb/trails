import React from 'react';
import { Switch } from 'react-router';
import { UnauthenticatedRoute } from './templates/UnauthenticatedRoute';
// import { AuthenticatedRoute } from './templates/AuthenticatedRoute';

import { Home } from './pages/Home';

export function Router() {
  const childProps = {};
  return (
    <Switch>
      <UnauthenticatedRoute component={Home} props={childProps} />
    </Switch>
  );
}
