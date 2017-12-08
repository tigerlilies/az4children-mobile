let initialState = [];

export default (state = initialState, action) => {

  switch (action.type) {

    case "SET_GENDER_PENDING":
      return state;
    case "SET_GENDER_FULFILLED":
      return action.payload;
    case "SET_GENDER_REJECTED":
      return state;

    case "SET_AGE_PENDING":
      return state;
    case "SET_AGE_FULFILLED":
      return action.payload;
    case "SET_AGE_REJECTED":
      return state;

    case "SET_LENGTH_PENDING":
      return state;
    case "SET_LENGTH_FULFILLED":
      return action.payload;
    case "SET_LENGTH_REJECTED":
      return state;

    default:
      return state;
  }
};
