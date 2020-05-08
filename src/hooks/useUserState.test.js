import { renderHook, act } from "@testing-library/react-hooks";
import { StateContextWrapper } from "./testUtils.js";
import { useUserState } from "./useUserState.js";
import { useDispatch } from "./useDispatch.js";
import { loginUserAction } from "../actions/user.actions";
import { StateContext } from "../contexts.js";

describe("test the user states", () => {

    // should return correct initial user state
    it("should use user state", () => {
        const { result } = renderHook(() => useUserState(),
        {
            wrapper: StateContextWrapper
        });
    expect(result.current).toBe('');
    });

    it("should return correct user state upon dispatch of login action", () => {
        const { result } = renderHook(() => ({
            state: useUserState(),
            dispatch: useDispatch()
        }),{
            wrapper: StateContextWrapper
        });
        // dispatch the login action
        act(() => result.current.dispatch(loginUserAction("Isaac","qwerty")));
        expect(result.current.state).toBe("Isaac");
    })
})