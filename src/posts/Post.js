import React from "react";

export default function Post({ title, content, author}) {
    return (
        <article className="posts">
        <h3 className="post-title">{title}</h3>
        <div className="title-underline"></div>
    <p className="post-content">{content}</p>
    <div className="author">Written by: <span className="author-name">{author}</span></div>
        </article>
    );
}