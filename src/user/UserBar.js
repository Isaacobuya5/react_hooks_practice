import React, {useContext} from "react";
import { StateContext } from "../contexts";

// import Register from "./user/Register";
import Login from "./Login";
import Register from "./Register";
import Logout from "./Logout";

export default function UserBar() {
    
    const { state } = useContext(StateContext);
    const { user } = state;
    
    let content;
    if (user) {
        content = (
            // <Logout user={user} dispatch={dispatch}/>
            <Logout />
        )
    } else {
        content = (
            // <Login dispatch={dispatch}/>
            <React.Fragment>
            <Register />
            <Login/>
            </React.Fragment>
        )
    }
    return (
       <React.Fragment>
           {content}
       </React.Fragment>
    )
}