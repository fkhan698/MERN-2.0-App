import { CREATE, UPDATE, FETCH_ALL, DELETE } from "../constants/actionTypes";

const PostReducers = (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];
    case DELETE:
      return posts.filter(post => post._id !== action.payload);
    default:
      return posts;
  }
};

export default PostReducers;