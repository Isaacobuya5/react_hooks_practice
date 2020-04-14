import React from "react";

export default function Register() {
    return (
        <article className="register">
        <form onSubmit={e => e.preventDefault()}>
         {/* <label htmlFor="login-username">username:</label> */}
         <input type="text" name="username" id="username" placeholder="username" />
         {/* <label htmlFor="login-password">password:</label> */}
         <input type="text" name="password" id="password"  placeholder="password"/>
         <input type="text" name="cpassword" id="cpassword"  placeholder="confirm password"/>
        <button type="submit">Register</button>
        </form>
        </article>
    )
}