import React from "react";
import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div>
      <Link to={`./${post.id}`}>
        <h1>{post.title}</h1>
      </Link>
      <h4>{post.body}</h4>
    </div>
  );
}
