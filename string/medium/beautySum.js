/*
1781. Sum of Beauty of All Substrings

The beauty of a string is the difference in frequencies between the most frequent and least frequent characters.

For example, the beauty of "abaacc" is 3 - 1 = 2.
Given a string s, return the sum of beauty of all of its substrings.

Example 1:

Input: s = "aabcb"
Output: 5
Explanation: The substrings with non-zero beauty are ["aab","aabc","aabcb","abcb","bcb"], each with beauty equal to 1.
Example 2:

Input: s = "aabcbaa"
Output: 17
*/

// BRUTE FORCE SOLUTION --- TIME COMPLEXITY => O(N^3) & AUX SPACE COMPLEXITY => O(N)

/*
var beautySum = function (s) {
  let sum = 0;

  const beauty = function (str) {
    const n = str.length;

    if (n < 3) {
      return 0;
    }

    const freq = {};
    let max = Number.NEGATIVE_INFINITY;
    let min = Number.POSITIVE_INFINITY;

    for (let i = 0; i < n; i++) {
      freq[str[i]] = (freq[str[i]] || 0) + 1;
    }

    const values = Object.values(freq);
    max = Math.max(...values);
    min = Math.min(...values);

    return max - min;
  };

  for (let i = 0; i < s.length; i++) {
    let str = "";
    for (let j = i; j < s.length; j++) {
      str += s[j];
      sum += beauty(str);
    }
  }

  return sum;
};
*/

// ==============================================================

// BEST SOLUTION - TIME COMPLEXITY => O(N^2) & AUX SPACE COMPLEXITY => O(1)

var beautySum = function (s) {
  const n = s.length;
  let sum = 0;

  for (let i = 0; i < n - 2; i++) {
    const freq = {};
    for (let j = i; j < n; j++) {
      freq[s[j]] = (freq[s[j]] || 0) + 1;

      const values = Object.values(freq);
      const max = Math.max(...values);
      const min = Math.min(...values);

      sum += max - min;
    }
  }

  return sum;
};

// TESTING

console.log(beautySum("aabcb"));
console.log(beautySum("aabcbaa"));
console.log(beautySum("xzvfsppsjfbxdwkqe"));
