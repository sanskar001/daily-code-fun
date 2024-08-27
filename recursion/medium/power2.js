// Power with negative and positve exponent

/*
Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

 

Example 1:

Input: x = 2.00000, n = 10
Output: 1024.00000
Example 2:

Input: x = 2.10000, n = 3
Output: 9.26100
Example 3:

Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/2 2 = 1/4 = 0.25
*/

var myPow = function (x, n) {
  if (n === 0) {
    return 1;
  }

  const exp = Math.abs(n);

  // This is mathematical trick used to reduce number function call inside callstack.

  const result = exp % 2 === 0 ? myPow(x * x, exp / 2) : x * myPow(x, exp - 1);

  return n < 0 ? 1 / result : result;
};

console.log(myPow(2, 4));
console.log(myPow(2, -2));
console.log(myPow(2, -4));
console.log(myPow(2, 0));
console.log(myPow(0.00001, 2147483647));
