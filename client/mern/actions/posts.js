import { FETCH_ALL, CREATE, DELETE } from "../constants/actionTypes";

import * as api from "../api/posts";

export const createPost = post => async dispatch => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
    return data;
  } catch (e) {
    console.log(e.message);
  }
};

export const deletePost = id => async dispatch => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (e) {
    console.log(e.message);
  }
};
