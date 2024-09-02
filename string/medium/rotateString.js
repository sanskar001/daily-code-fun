// Rotate String

/*
Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

For example, if s = "abcde", then it will be "bcdea" after one shift.
 

Example 1:

Input: s = "abcde", goal = "cdeab"
Output: true
Example 2:

Input: s = "abcde", goal = "abced"
Output: false
*/

// SOLUTION-1 ---- TIME COMPLEXITY => O(N^2) & AUX SPACE => O(1)

// var rotateString = function (s, goal) {
//   if (s.length !== goal.length) {
//     return false;
//   }

//   function rotateByOne(s) {
//     const n = s.length;

//     return s[n - 1] + s.slice(0, n - 1);
//   }

//   for (let i = 0; i < s.length; i++) {
//     if (s === goal) {
//       return true;
//     }
//     s = rotateByOne(s);
//   }

//   return false;
// };

// ===============================================================

// SOLUTION ---- TIME COMPLEXITY => O(N) & AUX SPACE COMPLEXITY => O(1)

/*
Intuition:

Idea is that shift is moving first letter to the end of the string, so if we concat the same string to the existing one - it will have all the possible shifts inside it. After that we just check if doubled string includes goal or not.
*/

var rotateString = function (s, goal) {
  if (s.length !== goal.length) return false;
  return s.concat(s).includes(goal);
};

// TESTING

console.log(rotateString("abcde", "cdeab")); // true;
console.log(rotateString("abcde", "abced")); // false;
console.log(rotateString("cccdd", "ccddc")); // true;
