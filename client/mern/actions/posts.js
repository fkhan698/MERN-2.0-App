import { FETCH_ALL, CREATE } from "../constants/actionTypes";

import * as api from "../api/index";

export const createPost = post => async dispatch => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
  } catch (e) {
    console.log(e.message);
  }
};
