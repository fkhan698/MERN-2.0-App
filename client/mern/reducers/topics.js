import { CREATE, UPDATE, DELETE, FETCH_ALL } from "../constants/actionTypes";

const TopicReducers = (topics = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...topics, action.payload];
    case DELETE:
      return topics.filter(topic => topic._id !== action.payload);
    default:
      return topics;
  }
};

export default TopicReducers;
