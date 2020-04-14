import React from "react";

export default function Login() {
    return (
        <article className="login">
        <form onSubmit={e => e.preventDefault()}>
         {/* <label htmlFor="login-username">username:</label> */}
         <input type="text" name="username" id="username" placeholder="username" />
         {/* <label htmlFor="login-password">password:</label> */}
         <input type="text" name="password" id="password"  placeholder="password"/>
        <button type="submit">Login</button>
        <h3>Not a member?. Click <a href="./Register.js">here</a> to register.</h3>
        </form>
        </article>
    )
}