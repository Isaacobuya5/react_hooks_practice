import React,{useState} from "react";

export default function Login({setUser}) {
    const [username, setUsername] = useState('');

    function handleChange(event) {
        event.preventDefault();
        setUsername(event.target.value);
    }
    return (
        <article className="login">
        <form onSubmit={e => {
            e.preventDefault();
            setUser(username);
        }}>
         {/* <label htmlFor="login-username">username:</label> */}
         <input type="text" name="username" id="username" placeholder="username" value={username} onChange={handleChange}/>
         {/* <label htmlFor="login-password">password:</label> */}
         <input type="text" name="password" id="password"  placeholder="password"/>
        <button type="submit" disabled={username.length === 0}>Login</button>
        <h3>Not a member?. Click <a href="./Register.js">here</a> to register.</h3>
        </form>
        </article>
    )
}