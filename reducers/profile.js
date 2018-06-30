let initialState = [];

export default (state=initialState, action) => {

  switch (action.type) {

    case 'PROFILE_PENDING':
      return state;
    case 'PROFILE_FULFILLED':
      return [...action.payload.data];
    case 'PROFILE_REJECTED':
      return action.payload;

    case 'UNASSIGNED_PENDING':
      return state;
    case 'UNASSIGNED_FULFILLED':
      return [...action.payload.data];
    case 'UNASSIGNED_REJECTED':
      return action.payload;

    case 'RESET_PENDING':
      return initialState;
    case 'RESET_FULFILLED':
      return initialState;
    case 'RESET_REJECTED':
      return initialState;

    default:
      return state;

  }

}
