import { renderHook } from "react-hooks-testing-library";
import { useIsUnloaded } from "./is-unloaded";

describe("Is Unloaded", () => {
  it("should run a function after a component has unloaded", () => {
    const actual = jest.fn();
    const { unmount } = renderHook(() => useIsUnloaded(actual));
    unmount();
    expect(actual).toHaveBeenCalled();
  });
});
