// Reverse Words in a String

/*
Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
Example 3:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
*/

// SOLUTION-1 ----- TIME => O(N) & AUX SPACE => O(N)

// var reverseWords = function (s) {
//   const trimedString = s.replace(/\s+/g, " ").trim();

//   const trimedStringList = trimedString.split(" ");

//   function reverse(arr) {
//     let start = 0;
//     let end = arr.length - 1;

//     while (start <= end) {
//       [arr[start], arr[end]] = [arr[end], arr[start]];
//       start++;
//       end--;
//     }

//     return arr;
//   }

//   return reverse(trimedStringList).join(" ");
// };

// ===========================================================

// SOLUTION-2

var reverseWords = function (s) {
  s = s.replace(/\s+/g, " ").trim();
  const n = s.length;
  let result = "";

  for (let i = n - 1, j = n; i >= 0 && j >= 0; i--) {
    if (s[i] === " ") {
      result += s.slice(i + 1, j) + " ";
      j = i;
    } else if (i === 0) {
      result += s.slice(i, j);
    }
  }

  return result;
};

// TESTING

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("a good   example"));
console.log(reverseWords("   hello    world    "));
