/**
 * Read FAQs section on the left for more information on how to use the editor
**/
// Do no change function name

function customIncludes(searchElement, fromIndex) {
  // DO NOT REMOVE
  'use strict';

  // Write your solution below
  // Using Linear search

  const n = this.length;
  let start = !fromIndex ? 0 : (fromIndex > n) ? n : fromIndex;
  start = (start + n) < 0 ? 0 : (start < 0) ? start + n : start;

  for (let i = start; i < n; i++) {
    if (Object.is(this[i], searchElement)) {
      return true;
    }
  }

  return false;
}

Array.prototype.customIncludes = customIncludes;
