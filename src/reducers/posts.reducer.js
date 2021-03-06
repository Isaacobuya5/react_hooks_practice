import { actionTypes } from "../actions/actionTypes";

export function postsReducer(state, action) {
    switch(action.type) {
        case actionTypes.CREATE_POST:
            const newPost = {
                title: action.title,
                content: action.content,
                author: action.author,
                id: action.id
            };
            return [newPost, ...state];
        case actionTypes.FETCH_POSTS:
            return action.posts;
        default:
            return state;
    }
}