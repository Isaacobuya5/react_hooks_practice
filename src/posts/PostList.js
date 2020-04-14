import React from "react";
import Post from "./Post";

export default function PostList({posts=[]}) {
    return (
        <article className="post-list">
         {posts.map((post, index) => (
             <Post key={index} {...post} />
         ))}
        </article>
    )
}