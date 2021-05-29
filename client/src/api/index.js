import axios from "axios";

const url = "http://localhost:5000/prompts";

export const fetchPrompts = () => axios.get(url);
export const createPrompt = newPrompt => axios.post(url, newPrompt);
