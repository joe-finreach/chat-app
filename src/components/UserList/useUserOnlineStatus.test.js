import { renderHook } from "react-hooks-testing-library";
import { useUserOnlineStatus } from "./useUserOnlineStatus";

describe("useUserOnlineStatus", () => {
  it("should return true for an online user", () => {
    const expected = true;
    const {
      result: { current : actual }
    } = renderHook(() => useUserOnlineStatus(1));
    expect(actual).toEqual(expected);
  });
});
