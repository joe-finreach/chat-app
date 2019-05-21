import { useEffect } from "react";

export function useIsUnloaded(method) {
  useEffect(() => {
    return () => method();
  }, []);
}
