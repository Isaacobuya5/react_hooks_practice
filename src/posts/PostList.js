import React from "react";
// import { StateContext } from "../contexts";
import { usePostsState } from "../hooks/usePostsState";
import Post from "./Post";



export default function PostList() {
  
    // call the custom hook
   const posts = usePostsState();

    return (
        
        <article className="post-list">
         {posts.map((post, index) => (
             <Post key={index} {...post} short={true}/>
         ))}
        </article>
    )
}