import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * ResizeObservers trigger a callback every time an element is resized.
 *
 * See also: MutationObserver, IntersectionObserver
 */
const useResizeObserver = (callback: ResizeObserverCallback) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;

    const resizeObserver = new ResizeObserver(callback);
    if (element) resizeObserver.observe(element);

    return () => {
      if (element) resizeObserver.unobserve(element);
      else resizeObserver.disconnect();
    };
  }, []);

  return ref;
};

/**
 * Returns a ref (to be attached to a container) and a boolean that indicates if
 * the "problematic child" is overflowing.
 *
 * @param problemChildId — the id of the child element that may overflow
 */
export const useCheckForOverflow = (problemChildId: string) => {
  const [headerRight, setHeaderRight] = useState(-1);
  const [navRight, setNavRight] = useState(-1);

  const resizeObserverCallback = useCallback<ResizeObserverCallback>(
    entries => {
      if (!entries?.length) return;

      const [{ target: headerEl }] = entries;
      const navEl = headerEl.querySelector(`#${problemChildId}`);

      if (!navEl) return;

      setHeaderRight(headerEl.getClientRects()[0].right);
      setNavRight(navEl.getClientRects()[0].right);
    },
    [problemChildId]
  );

  const containerRef = useResizeObserver(resizeObserverCallback);

  return [
    containerRef,
    (headerRight + 3) < navRight, // add 3px to be safe
  ] as const;
};
