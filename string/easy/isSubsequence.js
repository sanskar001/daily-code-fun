// Is Subsequence

/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).


Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false

*/

// SOLUTION: TWO POINTER APPROACH , TIME => O(N) AND AUX SPACE => O(1)

var isSubsequence = function (s, t) {
  if (s.length > t.length) {
    return false;
  }

  let i = 0;
  let j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
      if (i === s.length) {
        return true;
      }
      j++;
    } else {
      j++;
    }
  }

  return i === s.length;
};

// TESTING

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
console.log(isSubsequence("", "abc"));
