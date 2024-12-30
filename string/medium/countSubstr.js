/*
Substrings with K Distinct

Given a string s of lowercase alphabets, count all possible substrings (not necessarily distinct) that have exactly k distinct characters. 

Examples :

Input: s = "aba", k = 2
Output: 3
Explanation: The substrings are: "ab", "ba" and "aba".
Input: s = "abaaca", k = 1
Output: 7
Explanation: The substrings are: "a", "b", "a", "aa", "a", "c", "a".
Input: s = "cdad", k = 4
Output: 0
*/

// BRUTE FORCE APPROACH --- TIME COMPLEXITY => O(N^2) & AUX SPACE COMPLEXITY => O(N)

/*
function countSubstr(s, k) {
  const n = s.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = i; j < n; j++) {
      str += s[j];
      if (j - i + 1 >= k) {
        count += new Set(str).size === k;
      }
    }
  }

  return count;
}
*/

// ==================================================================================

function countSubstr(s, k) {
  const n = s.length;
  let count = 0;

  for (let i = k; i < n; i++) {
    let subArr = new Array(k);
    for(let j = 0; j < n-i; j++) {
        subArr
    }
  }

  return count;
}

// TESTING

console.log(countSubstr("aba", 1));
console.log(countSubstr("abaaca", 1));
console.log(countSubstr("cdad", 4));
