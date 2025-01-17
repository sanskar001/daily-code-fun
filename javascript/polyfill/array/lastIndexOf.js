const customLastIndexOf = function (value, fromIndex = this.length) {
  "use strict";

  const n = this.length;
  let start = fromIndex > n || !fromIndex ? n : fromIndex;
  start = start < 0 ? start + n : start;

  for (let i = start; i >= 0; i--) {
    if (this[i] === value) {
      return i;
    }
  }

  return -1;
};

Array.prototype.lastIndexOf = customLastIndexOf;

const arr = [10, 3, 2, 5, 11, 3, 6];

arr.lastIndexOf(3);
