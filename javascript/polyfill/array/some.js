/**
 * Read FAQs section on the left for more information on how to use the editor
 **/
// Do no change the function name

function customSome(callback) {
  // DO NOT REMOVE
  "use strict";

  // Write your solution below
  const n = this.length;

  for (let i = 0; i < n; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }

  return false;
}

Array.prototype.customSome = customSome;
