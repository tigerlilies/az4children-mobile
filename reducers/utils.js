let initialState = [];

export default (state=initialState, action) => {

  switch (action.type) {

    case 'EMAIL_PENDING':
      return state;
    case 'EMAIL_FULFILLED':
      return [...action.payload.data];
    case 'EMAIL_REJECTED':
      return action.payload;

    default:
      return state;

  }

}
