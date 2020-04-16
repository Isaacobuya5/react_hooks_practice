import React,{ useState } from "react";

import {createNewPost} from "../actions/posts.actions";

export default function CreatePost({user, posts, dispatch}) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    function handleTitle(event) {
        event.preventDefault();
        setTitle(event.target.value);
    }

    function handleContent(event) {
        event.preventDefault();
        setContent(event.target.value);
    }

    // creating  a new post
    function createPost() {
        // const newPost = {
        //     author: user,
        //     title,
        //     content
        // }
        // // adding new post to existing posts
        // setPosts([ newPost, ...posts]);
        dispatch(createNewPost(title, content, user));
    }

    function clearFields() {
        setTitle('');
        setContent('');
    }
    return (
    <article className="new-post">
    <form onSubmit={e => {
        e.preventDefault();
        createPost();
        clearFields();
    }
    }>
      <div className="author-create">Author: {user}</div>
      <input type="text" name="title" id="title" placeholder="post title" value={title} onChange={handleTitle}/>
         <textarea placeholder="Enter you post Content" value={content} onChange={handleContent}/>
        <button type="submit">Create</button>
    </form>
    </article>
    )
}