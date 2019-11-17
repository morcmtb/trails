import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import createRootReducer from './reducers';

// persist config
const persistConfig = {
  key: 'app',
  storage,
  blacklist: ['router']
};

const history = createBrowserHistory(),
  initialState = {},
  enhancers = [],
  logger = createLogger({
    collapsed: true
  }),
  middleware = [thunk, routerMiddleware(history), logger];

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const composedEnhancers = composeEnhancers(
    applyMiddleware(...middleware),
    ...enhancers
  ),
  store = createStore(
    persistReducer(persistConfig, createRootReducer(history)),
    initialState,
    composedEnhancers
  );

const persistor = persistStore(store);

export { store, history, persistor };
