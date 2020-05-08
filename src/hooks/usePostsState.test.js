import { renderHook, act } from "@testing-library/react-hooks";
import { StateContextWrapper } from "./testUtils";
import { usePostsState } from "./usePostsState.js";
import { useDispatch } from "./useDispatch.js";
import { createNewPost, fetchPosts } from "../actions/posts.actions";

describe("test post states", () => {

    // test initial state of post
    it("should use usePostsState", () => {
        const { result } = renderHook(() => usePostsState(),
        { wrapper: StateContextWrapper});

        expect(result.current).toEqual([]);
    });

    it("should update posts state on fetch action", () => {
        const { result } = renderHook(() => ({
            state: usePostsState(),
            dispatch: useDispatch()
        }),{
            wrapper: StateContextWrapper
        });

        const samplePosts = [
            {id: 'test'},
            {id: 'react'},
            {id: 'java'}
        ]
        act(() => result.current.dispatch(fetchPosts(samplePosts)));
        expect(result.current.state).toEqual(samplePosts);
    })

    // test if state is updated upon adding a new post
    it("should update state when a new post is created", () => {
        const { result } = renderHook(() => ({
            state: usePostsState(),
            dispatch: useDispatch()
        }),{
            wrapper: StateContextWrapper
        });
        act(() => 
        result.current.dispatch(createNewPost("Favourite Novel", "I love reading very much", "James Onyango"))
        );
        expect(result.current.state.length).toBe(1);
    })
})