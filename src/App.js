import React, {useState, useReducer} from "react";

import UserBar from "./user/UserBar";
import Post from "./posts/Post";
import CreatePost from "./posts/CreatePost";
import PostList from "./posts/PostList";

import {userReducer} from "./reducers/user.reducer";
import { postsReducer } from "./reducers/posts.reducer";

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
    // const [user, setUser] = useState('');
    const [user, dispatchUser] = useReducer(userReducer, '');

    // const [posts, setPosts] = useState(defaultPosts);
    // replaced with postReducer
    const [posts, dispatchPosts] = useReducer(postsReducer, defaultPosts);
// return <Logout user="Isaac Obuya"/>
return (
<div>
    <header>
        <UserBar user={user} dispatch={dispatchUser}/>
    </header>
    <section id="rest">
    {user &&  <CreatePost user={user} posts={posts} dispatchPosts={dispatchPosts}/>}
    <PostList posts={posts} />
    </section>
</div>
)
}