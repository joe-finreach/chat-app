import { useState } from "react";
import { useIsLoaded } from "hooks/is-loaded";

export function useUserOnlineStatus(userId) {
  const [isOnline, setIsOnline] = useState(false);

  useIsLoaded(() => setIsOnline(true));

  return isOnline;
}
