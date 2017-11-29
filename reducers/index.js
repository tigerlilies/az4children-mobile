import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import profiles from './profile';
import selected from './selected';

const rootReducer = combineReducers({
  profiles,
  selected,
  form: formReducer
});

export default rootReducer;
