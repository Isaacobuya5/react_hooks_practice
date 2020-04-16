import { userReducer } from "./user.reducer";
import { postsReducer } from "./posts.reducer";

export function rootReducer(state, action) {
    return {
        user: userReducer(state.user, action),
        posts: postsReducer(state.posts, action)
    }
}