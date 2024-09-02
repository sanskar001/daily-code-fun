// Sort Characters By Frequency

/*
Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

Return the sorted string. If there are multiple answers, return any of them.

 

Example 1:

Input: s = "tree"
Output: "eert"
Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
Example 2:

Input: s = "cccaaa"
Output: "aaaccc"
Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
Note that "cacaca" is incorrect, as the same characters must be together.
Example 3:

Input: s = "Aabb"
Output: "bbAa"
Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
*/

// TIME COMPLEXITY --- O(N LOGN) & AUX SPACE COMPLEXITY => O(N)

var frequencySort = function (s) {
  const freqObj = {};

  for (let char of s) {
    freqObj[char] = (freqObj[char] || 0) + 1;
  }

  const sortedArr = Object.entries(freqObj).sort((a, b) => b[1] - a[1]);

  return sortedArr.reduce((acc, item) => acc + item[0].repeat(item[1]), "");
};

// TESTING

console.log(frequencySort("tree"));
console.log(frequencySort("cacaca"));
console.log(frequencySort("aAbb"));
