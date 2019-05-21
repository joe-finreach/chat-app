import { useEffect } from "react";

export function useIsLoaded(method) {
  useEffect(() => {
    method();
  }, []);
}
