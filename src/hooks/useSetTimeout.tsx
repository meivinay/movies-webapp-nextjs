import { useRef, useEffect } from "react";

const useTimeout = (
  callback: () => void,
  interval: number | null
): ReturnType<typeof setTimeout> | undefined => {
  const intervalRef = useRef<ReturnType<typeof setInterval>>();
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (interval === null) {
      return () => clearInterval(intervalRef.current);
    }
    intervalRef.current = setTimeout(callbackRef.current, interval);
    return () => clearInterval(intervalRef.current);
  }, [interval]);
  return intervalRef.current;
};

export default useTimeout;
