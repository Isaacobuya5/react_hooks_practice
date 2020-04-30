import React, { useEffect, useContext } from "react";
import { useResource } from "react-request-hook";

import PostList from "./posts/PostList";
import { fetchPosts } from "./actions/posts.actions";
import { postsError } from "./actions/errors.actions";

import { StateContext } from "./contexts";

export default function HomePage () {
    const { state, dispatch } = useContext(StateContext);
    const { error } = state;

    const [posts, getPosts] = useResource(() => ({
        url: '/posts',
        method: 'get'
     }));
     
     useEffect(getPosts, []);
     
     // another useEffect that dispatches the action fetch_user
     useEffect(() => {
         if (posts && posts.error) {
             dispatch(postsError());
         }
         if (posts && posts.data) { 
             dispatch(fetchPosts(posts.data));
         }
     },[posts]);

    return (
       <div>
       {error && <b>{error}</b>}
       <PostList />
       </div>
    );
}

