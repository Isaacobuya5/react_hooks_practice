import React, { useState, useEffect, useContext } from "react";
import { useResource } from "react-request-hook";

import { StateContext } from "../contexts";
import { registerUserAction } from "../actions/user.actions";

export default function Register() {
    // form fields state
    const [profile, setProfile ] = useState({
        username: "",
        password: "",
        cpassword: ""
    });
    // consume the dispatch from global state
    const { dispatch } = useContext(StateContext);
    // hook to send a new post request to create a user
    const [ user, register ] = useResource((username, password) => ({
        url: '/users',
        method: '/posts',
        data: { username, password }
    }));

    useEffect(() => {
        if (user && user.data) {
            dispatch(registerUserAction(user.data));
        }
    }, [user]);

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setProfile({
            ...profile,
            [name]: value
        });
    }

    // destructure off username, password and confirm password
    const {username, password, cpassword} = profile;

    const handleSubmit = (event) => {
        event.preventDefault();
        // check if password / setPassword are same before submission
        if (password === cpassword) {
            // send the request for creating a new user
            register({username, password});
        }
        // password !== cpassword
        alert("Passwords do not match");
        return;
    }

    return (
        <article className="register">
        <form onSubmit={handleSubmit}>
         {/* <label htmlFor="login-username">username:</label> */}
         <input type="text" name="username" id="username" placeholder="username" onChange={handleChange}/>
         {/* <label htmlFor="login-password">password:</label> */}
         <input type="text" name="password" id="password"  placeholder="password" onChange={handleChange}/>
         <input type="text" name="cpassword" id="cpassword"  placeholder="confirm password" onChange={handleChange}/>
        <button type="submit">Register</button>
        </form>
        </article>
    )
}