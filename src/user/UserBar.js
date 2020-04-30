import React, {useContext} from "react";
import { StateContext } from "../contexts";

// import Register from "./user/Register";
import Login from "./Login";
import Register from "./Register";
// import Logout from "./Logout";

// define Logout component via Lazy Loading
// The import function dynamically loads the Logout component file from the Logout.js file
// In contrast to the static import statement, this function only gets called when React.lazy triggers it
// which means it will be imported when the component is needed.
const Logout = React.lazy(() => import('./Logout'));

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