import { combineReducers } from 'redux';

import trailsReducer from '../components/trail/TrailsSlice';

const rootReducer = combineReducers({
  trails: trailsReducer,
});

export { rootReducer };
