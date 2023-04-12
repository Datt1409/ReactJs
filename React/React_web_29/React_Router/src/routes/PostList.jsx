import React from "react";
import PostCard from "../components/PostCard";
import { useLoaderData } from "react-router-dom";

// export const posts = [
//   { id: 1, title: "post1", excerpt: "post 1 excerpt" },
//   { id: 2, title: "post2", excerpt: "post 2 excerpt" },
//   { id: 3, title: "post3", excerpt: "post 3 excerpt" },
//   { id: 4, title: "post4", excerpt: "post 4 excerpt" },
// ];

export default function PostList() {
  const posts = useLoaderData();
  console.log(posts);
  return (
    <div>
      <h1>PostList</h1>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export const postListLoader = () =>
  fetch("https://jsonplaceholder.typicode.com/posts");
