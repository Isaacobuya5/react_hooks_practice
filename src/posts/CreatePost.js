import React from "react";

export default function CreatePost({user}) {
    return (
    <article className="new-post">
    <form onSubmit={e => e.preventDefault()}>
      <div className="author-create">Author: {user}</div>
      <input type="text" name="title" id="title" placeholder="post title" />
         <textarea placeholder="Enter you post Content"/>
        <button type="submit">Create</button>
    </form>
    </article>
    )
}