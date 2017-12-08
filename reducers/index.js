import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import profiles from './profile';

const rootReducer = combineReducers({
  profiles,
  form: formReducer
});

export default rootReducer;
