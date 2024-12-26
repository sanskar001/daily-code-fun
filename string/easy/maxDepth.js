/*
1614. Maximum Nesting Depth of the Parentheses

Given a valid parentheses string s, return the nesting depth of s. The nesting depth is the maximum number of nested parentheses.


Example 1:

Input: s = "(1+(2*3)+((8)/4))+1"
Output: 3
Explanation:
Digit 8 is inside of 3 nested parentheses in the string.

Example 2:
Input: s = "(1)+((2))+(((3)))"
Output: 3
Explanation:
Digit 3 is inside of 3 nested parentheses in the string.

Example 3:
Input: s = "()(())((()()))"
Output: 3
*/

// TIME COMPLEXITY => O(N) & AUX SPACE COMPLEXITY => O(1)

var maxDepth = function (s) {
  const n = s.length;
  let i = 0;
  let open = 0;
  let max = 0;

  while (i < n) {
    if (s[i] === "(") {
      open++;
    } else if (s[i] === ")") {
      max = Math.max(max, open);
      open--;
    }
    i++;
  }

  return max;
};

// TESTING

console.log(maxDepth("(1+(2*3)+((8)/4))+1"));
console.log(maxDepth("(1)+((2))+(((3)))"));
console.log(maxDepth("()(())((()()))"));
