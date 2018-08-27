import {
  UNASSIGNED,
  RESET
} from '../actions/types';

let initialState = [];

export default (state=initialState, action) => {

  switch (action.type) {

    case UNASSIGNED:
      return action.profiles;

    case RESET:
      return initialState;

    default:
      return state;

  }

}
