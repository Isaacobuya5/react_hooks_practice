import React,{ useState, useContext, useEffect } from "react";
import { useResource } from "react-request-hook";
import { useNavigation } from "react-navi";

import { StateContext } from "../contexts";
import {createNewPost} from "../actions/posts.actions";


export default function CreatePost() {
    const { state, dispatch } = useContext(StateContext);
    const { user } = state;
    
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // hook to create a new post
    const [post , createPost ] = useResource(({ title, content, author}) => ({
        url: '/posts',
        method: 'post',
        data: { title, content, author: user }
    }));

    // navigation hook
    const navigation = useNavigation();

    // use effect hook
    useEffect(() => {
        if (post && post.data) {
            dispatch(createNewPost(post.data));
            // automatically move to post page after succesful creation of a new post
            navigation.navigate(`/view/${post.data.id}`);
        }
    },[post]);

    function handleTitle(event) {
        event.preventDefault();
        setTitle(event.target.value);
    }

    function handleContent(event) {
        event.preventDefault();
        setContent(event.target.value);
    }

    // creating  a new post
    function handleCreatePost() {
        // sending post request to the server
        createPost({ title, content, user});
       
    }

    function clearFields() {
        setTitle('');
        setContent('');
    }
    return (
    <article className="new-post">
    <form onSubmit={e => {
        e.preventDefault();
        handleCreatePost();
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