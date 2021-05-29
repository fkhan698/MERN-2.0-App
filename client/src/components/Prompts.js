import React from "react";
import { useSelector } from "react-redux";
export default function Prompts() {
  const posts = useSelector(state => state.prompts);
  console.log(posts);
  return <div></div>;
}
