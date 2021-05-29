import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE
} from "../constants/actionTypes";

export default (prompts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...prompts, action.payload];
    default:
      return prompts;
  }
};
