import { renderHook } from "react-hooks-testing-library";
import { useIsLoaded } from "./is-loaded";

describe("Is Loaded", () => {
  it("should run a function after a component has loaded", () => {
    const actual = jest.fn();
    renderHook(() => useIsLoaded(actual));
    expect(actual).toHaveBeenCalled();
  });
});