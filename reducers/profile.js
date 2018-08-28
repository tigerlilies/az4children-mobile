import {
  UNASSIGNED_SUCCESS,
  RESET,
  UNASSIGNED
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

    case RESET:
      return initialState;

    default:
      return state;

  }

}
