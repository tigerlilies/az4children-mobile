import {
  UNASSIGNED,
  UNASSIGNED_SUCCESS,
  INTEREST,
  INTEREST_SUCCESS,
  RESET,
} from '../actions/types';

const initialState = {
  loading: false,
  unassigned: []
};

export default (state=initialState, action) => {

  switch (action.type) {

    case UNASSIGNED:
      return { ...state, loading: true };

    case UNASSIGNED_SUCCESS:
      return { 
        ...state,
        ...initialState,
        unassigned: action.profiles
      };

    case INTEREST:
      console.log('in reducer INTEREST >>> state ', state);
      return { ...state, loading: true };

    case INTEREST_SUCCESS:
      console.log('in reducer INTEREST_SUCCESS >>> state ', state);
      return { ...state, loading: false };

    case RESET:
      return initialState;

    default:
      return state;

  }

}
