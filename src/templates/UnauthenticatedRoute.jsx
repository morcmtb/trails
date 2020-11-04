import { Container, createStyles, makeStyles, Theme } from '@material-ui/core';
import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Header } from './../components/layout/Header';

const Layout = ({ children, ...rest }) => {
  const classes = usestyles();
  return (
    <Fragment>
      <Header />
      <main>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl">{children}</Container>
      </main>
    </Fragment>
  );
};

const usestyles = makeStyles((theme) =>
  createStyles({
    appBarSpacer: theme.mixins.toolbar,
  })
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
        render={(props) =>
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
