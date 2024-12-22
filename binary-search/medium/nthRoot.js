/*
Find nth root of m

You are given 2 numbers n and m, the task is to find n√m (nth root of m). If the root is not integer then returns -1.

Examples :

Input: n = 2, m = 9
Output: 3
Explanation: 3^2 = 9

Input: n = 3, m = 9
Output: -1
Explanation: 3rd root of 9 is not integer.

Input: n = 1, m = 14
Output: 14
*/

// Using logrithm loga(b) = c => b = a ^ c

// TIME COMPLEXITY => O(1

function nthRoot(n, m) {
  if (n === 1) {
    return m;
  }

  const result = +(10 ** (Math.log10(m) / n)).toFixed(3);

  return Number.isInteger(result) ? result : -1;
}

// TESTING

console.log(nthRoot(2, 9));
console.log(nthRoot(3, 9));
console.log(nthRoot(1, 14));
console.log(nthRoot(3, 512));
console.log(nthRoot(2, 400));
