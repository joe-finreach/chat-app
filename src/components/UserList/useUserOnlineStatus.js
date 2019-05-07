import React, { useState, useEffect } from "react";

export function useUserOnlineStatus(userId) {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    setIsOnline(true);
  }, []);

  return isOnline;
}
