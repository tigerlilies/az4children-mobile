import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import profiles from './profile';
import utils from './utils';

const rootReducer = combineReducers({
  profiles,
  utils,
  form: formReducer
});

export default rootReducer;
