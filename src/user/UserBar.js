import React from "react";

// import Register from "./user/Register";
import Login from "./Login";
import Logout from "./Logout";

export default function UserBar() {
    const user = "";
    let content;
    if (user) {
        content = (
            <Logout user={user} />
        )
    } else {
        content = (
            <Login />
        )
    }
    return (
       <React.Fragment>
           {content}
       </React.Fragment>
    )
}