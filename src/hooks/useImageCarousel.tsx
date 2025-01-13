import { startTransition, useState } from "react";
import useInterval from "./useInterval";

type Options = {
  autoPlay?: boolean;
  interval?: number;
};
const useImageCarousel = (
  totalItems: number,
  Options: Options = {
    autoPlay: false,
    interval: 0,
  }
): {
  currIdx: number;
  next: () => void;
} => {
  const [currIdx, setCurrIdx] = useState<number>(0);

  const next = () => {
    startTransition(() => {
      setCurrIdx((prev) => (prev + 1) % totalItems);
    });
  };
  useInterval(
    () => {
      next();
    },
    Options?.autoPlay && Number(Options.interval) > 0 ? Options.interval : null
  );

  return { currIdx, next };
};

export default useImageCarousel;
