import { INCREMENT, DECREMENT } from "../actions";

const initialState = {
  count: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      // Fill in the body of this case
      return {
        ...state,
        count: action.payload + 1
      };
    case DECREMENT:
      // Fill in the body of this case
      return {
        ...state,
        count: action.payload - 1
      };
    default:
      return state;
  }
};
