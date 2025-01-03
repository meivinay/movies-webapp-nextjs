import { useRef, useEffect } from "react";

const useInterval = (
  interval: number,
  callback: () => void
): ReturnType<typeof setInterval> | undefined => {
  const intervalRef = useRef<ReturnType<typeof setInterval>>();
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    intervalRef.current = setInterval(callbackRef.current, interval);
    return () => clearInterval(intervalRef.current);
  }, [interval]);
  return intervalRef.current;
};

export default useInterval;
