let initialState = [];

export default (state=initialState, action) => {

  switch (action.type) {

    case 'PROFILE_PENDING':
      return state;
    case 'PROFILE_FULFILLED':
      return [...action.payload.data];
    case 'PROFILE_REJECTED':
      return action.payload;

    default:
      return state;

  }

}
