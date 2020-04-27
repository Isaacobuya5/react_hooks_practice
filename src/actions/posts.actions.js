import {actionTypes} from "./actionTypes";

export function createNewPost(title, content, author) {
    return {
        type: actionTypes.CREATE_POST,
        title,
        content,
        author
    }
}

export function fetchPosts(posts) {
return {
    type: actionTypes.FETCH_POSTS,
    posts
}
}