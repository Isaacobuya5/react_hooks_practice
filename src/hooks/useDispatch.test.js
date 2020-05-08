import { renderHook } from "@testing-library/react-hooks";
import { StateContextWrapper } from "./testUtils.js";
import { useDispatch } from "./useDispatch";

it("should use dispatch", () => {
    const { result } = renderHook(() => useDispatch(),
    {
        wrapper: StateContextWrapper
    });
    expect(typeof result.current).toBe('function')
})