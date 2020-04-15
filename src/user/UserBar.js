import React, {useState} from "react";

// import Register from "./user/Register";
import Login from "./Login";
import Logout from "./Logout";

export default function UserBar({user, dispatch}) {
    let content;
    if (user) {
        content = (
            <Logout user={user} dispatch={dispatch}/>
        )
    } else {
        content = (
            <Login dispatch={dispatch}/>
        )
    }
    return (
       <React.Fragment>
           {content}
       </React.Fragment>
    )
}