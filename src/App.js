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
import {ThemeContext} from "./contexts";

import './App.css';

const defaultPosts = [
    {
        title: "Testing React Components",
        content: "Jest is the reccommended test runner for testing React, However there exists others such as Mocha",
        author: "Isaac Obuya"
    },
    {
        title: "Introduction to React Hooks",
        content: "React Hooks provides a consize way of creating react components that are easy to test and have no side effects",
        author: "Abraham Imvhoc"
    },
    {
        title: "Roadmap to learning Web Development",
        content: "The beggining of learning React starts with thorougly learning and mastering the syntax of Javascript, together with HTM and CSS",
        author: "Sam Kiprop"
    }
];
export default function App() {

    const [theme, setTheme] = useState({
        primaryColor: 'green',
        secondaryColor: 'blue'
    });

    // const [user, setUser] = useState('');
    // const [user, dispatchUser] = useReducer(userReducer, '');

    // const [posts, setPosts] = useState(defaultPosts);
    // replaced with postReducer
    // const [posts, dispatchPosts] = useReducer(postsReducer, defaultPosts);
// return <Logout user="Isaac Obuya"/>

   // each hook definition to be replaced with a single defined hook definition for both user and posts
   const [state, dispatch] = useReducer(rootReducer, {
    user: '',
    posts: defaultPosts
});

// extract values 
const {user, posts} = state;
// then we pass dispatch as prop to each of the component rather than dispatchUser, or dispatchPosts

useEffect(() => {
    if (user) {
        document.title = `${user} - React Blog`
    } else {
        document.title = "React Blog"
    }
},[user]);

return (
//using Context Provider to change the value of the Contexts
<ThemeContext.Provider value={theme}>
<div>
    <header>
        {user ? <Header text="React Hooks Blog" /> : ""}
        <ChangeTheme theme={theme} setTheme={setTheme} />
        <UserBar user={user} dispatch={dispatch}/>
    </header>
    <section id="rest">
    {user &&  <CreatePost user={user} posts={posts} dispatch={dispatch}/>}
    <PostList posts={posts} />
    </section>
</div>
</ThemeContext.Provider>
)

}