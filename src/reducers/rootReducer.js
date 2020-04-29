import { userReducer } from "./user.reducer";
import { postsReducer } from "./posts.reducer";
import { errorReducer } from "./errors.reducer";

export function rootReducer(state, action) {
    return {
        user: userReducer(state.user, action),
        posts: postsReducer(state.posts, action),
        error: errorReducer(state.errors, action)
    }
}