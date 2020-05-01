import React,{useContext} from "react";
import { StateContext } from "../contexts";

import Post from "./Post";



export default function PostList() {
  
    const {state} = useContext(StateContext);

    const {posts} = state;

    return (
        
        <article className="post-list">
         {posts.map((post, index) => (
             <Post key={index} {...post} short={true}/>
         ))}
        </article>
    )
}