import React, {useState} from "react";

// import Register from "./user/Register";
import Login from "./Login";
import Logout from "./Logout";

export default function UserBar({user, setUser}) {
    let content;
    if (user) {
        content = (
            <Logout user={user} setUser={setUser}/>
        )
    } else {
        content = (
            <Login setUser={setUser}/>
        )
    }
    return (
       <React.Fragment>
           {content}
       </React.Fragment>
    )
}