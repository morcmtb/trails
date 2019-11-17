import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Header } from './../organisms/header';
import { Section } from './../organisms/section';

const Layout = ({ children, ...rest }) => (
  <>
    <Header />
    <Section>{children}</Section>
  </>
);

export const UnauthenticatedRoute = ({
  component: C,
  props: cProps,
  ...rest
}) => {
  return (
    <Layout>
      <Route
        {...rest}
        render={props =>
          !cProps.isAuthenticated ? (
            <C {...props} {...cProps} />
          ) : (
            <Redirect to="/" />
          )
        }
      />
    </Layout>
  );
};
