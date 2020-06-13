export const rateReducer = (state, action) => {
  switch (action.type) {
    case "LIKE_APP":
      return state + 1;
    case "DISLIKE_APP":
      return state - 1;
    case "RESET_RATE":
      return 0;
    case "SET_RATE":
      return action.count;
    default:
      return state;
  }
};
