import { renderHook, act } from "@testing-library/react-hooks";

import { useCounter } from "./useCounter";

it("should use a counter", () => {
    // result key contains the result of our hook
  const { result } = renderHook(() => useCounter());
  expect(result.current.count).toBe(0);
  expect(typeof result.current.increment).toBe('function')
});

it("should increment the counter", () => {
        // result key contains the result of our hook
  const { result } = renderHook(() => useCounter());
  // excecute the functions using act
  act(() => result.current.increment());
  expect(result.current.count).toBe(1);
})

it("should reset the counter", () => {
    let initial = 0;
  // result key contains the result of our hook
  const { result, rerender } = renderHook(() => useCounter(initial));
  initial = 123;
  rerender();
  act(() => result.current.reset());
  expect(result.current.count).toBe(123);
})