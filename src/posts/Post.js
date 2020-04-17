import React, {useContext} from "react";
import {ThemeContext} from "../contexts";

export default function Post({ title, content, author }) {
    const { secondaryColor } = useContext(ThemeContext);


    return (
        <article className="posts">
        <h3 className="post-title" style={{ color: secondaryColor}}>{title}</h3>
        <div className="title-underline"></div>
    <p className="post-content">{content}</p>
    <div className="author">Written by: <span className="author-name">{author}</span></div>
        </article>
    );
}