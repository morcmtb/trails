import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { store, history, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from './router';

import * as serviceWorker from './serviceWorker';

import { ThemeProvider } from './ThemeProvider';

render(
  <ThemeProvider>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Router />
      </ConnectedRouter>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
