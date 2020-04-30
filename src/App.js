import React, {useReducer, useEffect, useState} from "react";


import HeaderBar from "./HeaderBar";
import HomePage from "./HomePage";
import PostPage from "./posts/PostPage";

// import {userReducer} from "./reducers/user.reducer";
// import { postsReducer } from "./reducers/posts.reducer";

// import the rootReducer containing combined reducers
import { rootReducer } from "./reducers/rootReducer";
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
    posts: [],
    error:''
});

// extract values 
 const { user, error } = state;
// then we pass dispatch as prop to each of the component rather than dispatchUser, or dispatchPosts

// REPLACING WITH useRequest HOOK.

// fetch posts via hook and then dispatch fetchPost action to update the posts array in the state.
// useEffect(() => {
//     fetch('/api/posts')
//     .then(response => response.json())
//     .then(posts => dispatch(fetchPosts(posts)));
// },[]);

return (
//using Context Provider to change the value of the Contexts
<StateContext.Provider value={{state, dispatch}}>
<ThemeContext.Provider value={theme}>
<HeaderBar setTheme={setTheme}/>
{/* <HomePage /> */}
<PostPage id={"react-hooks"} />
</ThemeContext.Provider>
</StateContext.Provider>
)

}