import { useState, useEffect, RefObject } from 'react';

export const useHeightFromBottom = <T extends HTMLElement>(
  ref: RefObject<T>
) => {
  const [height, setHeight] = useState<number>(0);
  useEffect(() => {
    if (ref.current !== null) {
      const { bottom } = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      setHeight(windowHeight - bottom);
    }
  }, [ref]);

  return height;
};
