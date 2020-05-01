import React, {useContext} from "react";
import { Link } from "react-navi";
import {ThemeContext} from "../contexts";

export default function Post({ id, title, content, author, short = false }) {
    const { secondaryColor } = useContext(ThemeContext);

    let processedContent = content;

    if (short) {
        if ( content.length > 30) {
            processedContent = content.substring(0, 30) + '...'
        }
    }

    return (
        <article className="posts">
        <h3 className="post-title" style={{ color: secondaryColor}}>{title}</h3>
        <div className="title-underline"></div>
    <p className="post-content">{processedContent}</p>
    {short && 
    <div>
        <br />
        <Link href={`/view/${id}`}>View full post</Link>
        </div>}
    <div className="author">Written by: <span className="author-name">{author}</span></div>
        </article>
    );
}

