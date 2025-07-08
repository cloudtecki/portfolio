import { coalesce } from './core';

/**
 * Stops propagation and prevents default behavior.
 *
 * @param e The event to be supressed.
 */
export const suppress = function suppress(e: any): void {
  stop(e);
};

/**
 * Stops propagation but allows default behavior.
 *
 * @param e The event to be confined.
 */
export const confine = function confine(e: any): void {
  stop(e, false);
};

const stop = function stop(event: Event, preventDefault?: boolean): void {
  if (event.stopPropagation) {
    event.stopPropagation();
  }
  if (event.cancelBubble) {
    event.cancelBubble = true;
  }

  if (coalesce(preventDefault, true)) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  }
};
