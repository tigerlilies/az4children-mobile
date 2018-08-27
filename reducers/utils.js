import { EMAIL } from '../actions/types';

let initialState = [];

export default (state=initialState, action) => {

  switch (action.type) {
    case EMAIL:
      return [...action.payload.data];

    default:
      return state;

  }

}
