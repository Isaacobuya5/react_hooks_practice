import React,{ useState,  useEffect } from "react";
import { useNavigation } from "react-navi";
import useUndo from "use-undo";

// import { StateContext } from "../contexts";
import { useUserState } from "../hooks/useUserState";
import { useDispatch } from "../hooks/useDispatch";
import { useAPICreatePost } from "../hooks/api";
import {createNewPost} from "../actions/posts.actions";


export default function CreatePost() {
    const user = useUserState();
    const dispatch = useDispatch();
    
    const [title, setTitle] = useState('');
    // const [content, setContent] = useState('');
    // enable for undo and redo functionality in the textarea
     const [undoContent, {
         set: setContent,
         undo,
         redo,
         canUndo,
         canRedo
     }] = useUndo('');

     const content = undoContent.present;


    // hook to create a new post
    const [post , createPost ] = useAPICreatePost(user);

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
         <button type="button" onClick={undo} disabled={!canUndo}>Undo</button>
         <button type="button" onClick={redo} disabled={!canRedo}>Redo</button>
        <button type="submit">Create</button>
    </form>
    </article>
    )
}