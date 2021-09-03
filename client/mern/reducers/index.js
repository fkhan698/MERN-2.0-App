import { combineReducers } from "redux";
import posts from "./posts";
import topics from "./topics";

export const reducers = combineReducers({ posts, topics });
