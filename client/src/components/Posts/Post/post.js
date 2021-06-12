import { useDispatch } from "react-redux";
const Post = ({ post }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
};

export default Post;
