import * as api from "../api";
import { FETCH_ALL, CREATE } from "../constants/actionTypes";

//Action Creators

export const getPrompts = () => async dispatch => {
  try {
    const { data } = await api.fetchPrompts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPrompt = () => async dispatch => {
  try {
    const { data } = await api.createPrompt();
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
