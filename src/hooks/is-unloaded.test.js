import { renderHook } from "react-hooks-testing-library";
import { useIsUnloaded } from "./is-unloaded";

describe("Is Loaded", () => {
  it("should run a function after a component has loaded", () => {
    const actual = jest.fn();
    const { unmount } = renderHook(() => useIsUnloaded(actual));
    unmount();
    expect(actual).toHaveBeenCalled();
  });
});
