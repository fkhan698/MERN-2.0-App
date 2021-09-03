import React from "react";
import Posts from "../../components/Posts/Posts.js";
import Link from "next/link";

export default function PostsHome() {
  return (
    <>
      <Posts />

      <div>
        <Link href="./posts/new">
          <button>New Post</button>
        </Link>
      </div>
    </>
  );
}
