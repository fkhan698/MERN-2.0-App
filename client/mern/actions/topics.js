import { CREATE } from "../constants/actionTypes";
import * as api from "../api/topics";

export const createTopics = topic => async dispatch => {
  try {
    const { data } = await api.createTopics(topic);
    dispatch({ type: CREATE, payload: data });
    return data;
  } catch (e) {
    console.log(e.message);
  }
};
