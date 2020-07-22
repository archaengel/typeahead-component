import { useEffect, RefObject } from 'react';

export const useOnClickOutside = <T extends HTMLElement>(
  ref: RefObject<T>,
  handler: (e: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    const mouseListener = (e: MouseEvent): void => {
      if (ref.current && ref.current.contains(e.target as Node)) {
        return;
      }

      handler(e);
    };

    const touchListener = (e: TouchEvent): void => {
      if (ref.current?.contains(e.target as Node)) {
        return;
      }

      handler(e);
    };
    document.addEventListener('mousedown', mouseListener);
    document.addEventListener('touchstart', touchListener);

    return () => {
      document.removeEventListener('mousedown', mouseListener);
      document.removeEventListener('touchstart', touchListener);
    };
  });
};
