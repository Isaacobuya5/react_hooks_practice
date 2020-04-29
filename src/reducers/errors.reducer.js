import { actionTypes } from "../actions/actionTypes";
export const errorReducer = (state, action) => {
    switch(action.type) {
        case actionTypes.POSTS_ERROR:
            return "Failed to fetch posts";
        default:
            return state;
    }
}