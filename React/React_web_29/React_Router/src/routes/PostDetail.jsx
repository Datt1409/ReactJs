import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PostDetail({ post }) {
  const params = useParams();

  useEffect(() => {
    console.log("postId: ", params.postId, "params: ", params);
  }, [params]);
  return <div>{post.body}</div>;
}

export const postDetailLoader = ({ params }) => {};
