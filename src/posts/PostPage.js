import React, { useEffect } from "react";
import { useResource } from "react-request-hook";

import Post from "./Post";

export default function PostPage ({ id }) {
    console.log(id)

    const [post, getPost] = useResource(() => ({
        url: `/posts/${id}`,
        method: "get"
    }));

    useEffect(getPost, [id]);

    return (
       <div>
           {(post && post.data) ? <Post {...post.data} /> : "Loading..."}
       </div>
    );
}

