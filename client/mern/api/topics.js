import axios from "axios";

const URL = "http://localhost:5000/topics";

export const fetchTopics = () => axios.get(URL);
export const createTopics = newTopic => axios.post(URL, newTopic);
export const deleteTopics = () => axios.delete(`${URL}/${id}`);
