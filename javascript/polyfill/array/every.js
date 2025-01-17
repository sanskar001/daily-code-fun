/**
 * Read FAQs section on the left for more information on how to use the editor
**/
// Do no change the function name

function customEvery(callback) {
  // DO NOT REMOVE
  'use strict';
  
  // Write your solution below
  const n = this.length;
  let ans = true; 

  for(let i = 0; i < n; i++) {
    ans &&= callback(this[i] ?? 0, i, this);
  }

  return ans;
}

Array.prototype.customEvery = customEvery;
