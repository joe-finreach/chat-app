import { renderHook } from "react-hooks-testing-library";
import { useIsUpdated } from "./is-updated";

describe("Is Loaded", () => {
  it("should run a function after a component has updated", () => {
    const actual = jest.fn();
    const initialProps = { test: "test" };
    const { rerender } = renderHook(() => useIsUpdated(actual, [initialProps]), {
      initialProps
    });
    rerender([{ test: "this" }]);
    expect(actual).toHaveBeenCalled();
  });
});
