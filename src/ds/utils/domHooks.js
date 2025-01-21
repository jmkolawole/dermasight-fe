/**
 * This util file contains hooks that directly manipulate the browser DOM
 * Please don't directly manipulate the DOM unless that's the last resort.
 */

import {useEffect, useState} from 'react';

/**
 * Attach click event to outer/outside/exterior elements of an element
 * @param {RefObject<HTMLDivElement>} ref
 * @param {EventListener} func
 */
export const useClickOutside = (ref, func) => {
  useEffect(() => {
    // Bind the event listener
    document.addEventListener('mousedown', func);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', func);
    };
  }, [ref, func]);
};

/**
 * Returns the width of the window
 */
export const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return {width};
};
