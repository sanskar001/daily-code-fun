// Count Good Numbers

/*
A digit string is good if the digits (0-indexed) at even indices are even and the digits at odd indices are prime (2, 3, 5, or 7).

For example, "2582" is good because the digits (2 and 8) at even positions are even and the digits (5 and 2) at odd positions are prime. However, "3245" is not good because 3 is at an even index but is not even.
Given an integer n, return the total number of good digit strings of length n. Since the answer may be large, return it modulo 109 + 7.

A digit string is a string consisting of digits 0 through 9 that may contain leading zeros.

 

Example 1:

Input: n = 1
Output: 5
Explanation: The good numbers of length 1 are "0", "2", "4", "6", "8".
Example 2:

Input: n = 4
Output: 400
Example 3:

Input: n = 50
Output: 564908303

*/

/*

INTUITION:

The intuition behind the solution is to understand that since the digits at even and odd indices have separate and independent constraints, they can be handled separately. For digits at even positions, there are 5 choices (0, 2, 4, 6, 8), and for digits at odd positions, there are 4 choices (2, 3, 5, 7).

Given a string of length n, half of the digits will be at even indices and half at odd indices (for odd values of n, there will be one more digit at an even index since counting starts at 0). Hence, for strings of even length, we have a straightforward calculation:

The number of ways to fill even indices = 5^(n/2).
The number of ways to fill odd indices = 4^(n/2).
For odd lengths of n, there is one extra even index, hence:

The number of ways to fill even indices = 5^((n+1)/2).
The number of ways to fill odd indices = 4^(n/2).
To find the total combinations, we multiply the number of ways to fill even indices with the number of ways to fill odd indices.

Since the calculations can result in very large numbers, we use modulo arithmetic to avoid overflow and keep the results within integer limits. The modulo used is 10^9 + 7, which is a large prime number, that helps manage big numbers in competitive programming problems.
*/

var countGoodNumbers = function (n) {
  n = BigInt(n);
  let mod = BigInt(1_000_000_007);
  let even = (n + 1n) / 2n;
  let odd = n / 2n;
  let first = pow(5n, even) % mod;
  let second = pow(4n, odd) % mod;

  return Number((first * second) % mod);

  function pow(x, n) {
    if (n === 0n) return 1n;
    let temp = pow(BigInt(x), n / 2n);
    if (n % 2n === 0n) return (temp * temp) % mod;
    else return (x * temp * temp) % mod;
  }
};

// TESTING

console.log(countGoodNumbers(1));
console.log(countGoodNumbers(3));
console.log(countGoodNumbers(4));
console.log(countGoodNumbers(50));
