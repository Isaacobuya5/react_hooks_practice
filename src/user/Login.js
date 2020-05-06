import React,{useState, useContext, useEffect} from "react";
import { useResource } from "react-request-hook";
import {loginUserAction} from "../actions/user.actions";
import { useDispatch } from "../hooks/useDispatch";

export default function Login() {

    const dispatch = useDispatch();

    const [currentUser, setCurrentUser] = useState({
        username: "",
        password: ""
    });

    // status for login failure
    const [loginFailed, setLoginFailed] = useState(false);

    
    const { username, password } = currentUser;

    const [ user, login ] = useResource((username, password) => ({
        url: `/login/${encodeURI(username)}/${encodeURI(password)}`,
        method: 'get'
    }));

    useEffect(() => {
        if (user && user.data) {
            // empty array means login failed
            // login succesful
            if (user.data.length > 0) {
               setLoginFailed(false);
               // dispatch the action
               dispatch(loginUserAction(user.data[0].username, user.data[0].password));
            } 
            // login failed
            if (user && user.error) {
                setLoginFailed(true);
            }

            // failed login set status to true
            setLoginFailed(true);
            return;
        }
    }, [user]);

    function handleChange(event) {
        event.preventDefault();
        const { name, value } = event.target;
         setCurrentUser({
             ...currentUser,
             [name]: value
         });
    }

    function handleSubmit(event) {
        event.preventDefault();
        login(username, password);
    }
    return (
        <article className="login">
        <form onSubmit={handleSubmit}>
         {/* <label htmlFor="login-username">username:</label> */}
         <input type="text" name="username" id="username" placeholder="username" value={username} onChange={handleChange}/>
         {/* <label htmlFor="login-password">password:</label> */}
         <input type="password" name="password" id="password"  placeholder="password" value={password} onChange={handleChange}/>
        <button type="submit" disabled={username.length === 0}>Login</button>
        <h3>Not a member?. Click <a href="./Register.js">here</a> to register.</h3>
        </form>
        {loginFailed && <span style={ {color: "red"}}>You entered an invalid email or password</span>}
        </article>
    )
}