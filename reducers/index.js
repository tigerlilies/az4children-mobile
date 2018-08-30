import { combineReducers } from 'redux';

import profiles from './profile';
import utils from './utils';

const rootReducer = combineReducers({
  profiles,
  utils,
});

export default rootReducer;
