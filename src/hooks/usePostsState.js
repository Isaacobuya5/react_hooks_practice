import { useContext } from "react";

import { StateContext } from "../contexts";

export  function usePostsState() {
    const { state } = useContext(StateContext);
    return state.posts;
}