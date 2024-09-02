// Isomorphic Strings

/*
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
*/

// SOLUTION-1 --- TIME => O(N) & AUX SPACE => O(N)

// var isIsomorphic = function (s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }

//   const mapSToT = {};
//   const mapTToS = {};

//   for (let i = 0; i < s.length; i++) {
//     if (mapSToT[s[i]] && mapSToT[s[i]] !== t[i]) {
//       return false;
//     } else {
//       mapSToT[s[i]] = t[i];
//     }
//   }

//   for (let i = 0; i < t.length; i++) {
//     if (mapTToS[t[i]] && mapTToS[t[i]] !== s[i]) {
//       return false;
//     } else {
//       mapTToS[t[i]] = s[i];
//     }
//   }

//   return true;
// };

// ==========================================================

// SOLUTION-2 => TIME COMPLEXITY - O(N) & AUX SPACE COMPLEXITY - O(N)

var isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const mapS = {};
  const mapT = {};

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if (mapS[sChar] !== mapT[tChar]) {
      return false;
    }

    mapS[sChar] = i;
    mapT[tChar] = i;
  }

  return true;
};

// TESTING

console.log(isIsomorphic("egg", "add")); // true
console.log(isIsomorphic("foo", "bar")); // false
console.log(isIsomorphic("paper", "title")); // true
console.log(isIsomorphic("badc", "baba")); // false
