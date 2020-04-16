import {actionTypes} from "./actionTypes";

export function createNewPost(title, content, author) {
    return {
        type: actionTypes.CREATE_POST,
        title,
        content,
        author
    }
}