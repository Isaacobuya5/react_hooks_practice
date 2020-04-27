import React, {useReducer, useEffect, useState} from "react";

import Header from "./Header";
import ChangeTheme from './posts/ChangeTheme';
import UserBar from "./user/UserBar";
import Post from "./posts/Post";
import CreatePost from "./posts/CreatePost";
import PostList from "./posts/PostList";

// import {userReducer} from "./reducers/user.reducer";
// import { postsReducer } from "./reducers/posts.reducer";

// import the rootReducer containing combined reducers
import { rootReducer } from "./reducers/rootReducer";
import { fetchPosts } from "./actions/posts.actions";
import {StateContext,ThemeContext} from "./contexts";

import './App.css';

export default function App() {

    const [theme, setTheme] = useState({
        primaryColor: 'green',
        secondaryColor: 'blue'
    });

   // each hook definition to be replaced with a single defined hook definition for both user and posts
   const [state, dispatch] = useReducer(rootReducer, {
    user: '',
    posts: []
});

// extract values 
const {user, posts} = state;
// then we pass dispatch as prop to each of the component rather than dispatchUser, or dispatchPosts

// fetch posts via hook and then dispatch fetchPost action to update the posts array in the state.
useEffect(() => {
    fetch('/api/posts')
    .then(response => response.json())
    .then(posts => dispatch(fetchPosts(posts)));
},[]);

return (
//using Context Provider to change the value of the Contexts
<StateContext.Provider value={{state, dispatch}}>
<ThemeContext.Provider value={theme}>
<div>
    <header>
        {user ? <Header text="React Hooks Blog" /> : ""}
        <ChangeTheme theme={theme} setTheme={setTheme} />
        {/* <UserBar user={user} dispatch={dispatch}/> */}
        <UserBar />
    </header>
    <section id="rest">
    {/* {user &&  <CreatePost user={user} posts={posts} dispatch={dispatch}/>} */}
    {user &&  <CreatePost />}
    {/* <PostList posts={posts} /> */}
    <PostList />
    </section>
</div>
</ThemeContext.Provider>
</StateContext.Provider>
)

}