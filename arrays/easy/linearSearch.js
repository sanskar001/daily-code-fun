// Linear Search

/*
Problem Statement: Given an array, and an element num the task is to find if num is present in the given array or not. If present print the index of the element or print -1.

Examples:

Example 1:
Input: arr[]= 1 2 3 4 5, num = 3
Output: 2
Explanation: 3 is present in the 2nd index

Example 2:
Input: arr[]= 5 4 3 2 1, num = 5
Output: 0
Explanation: 5 is present in the 0th index
*/

// TIME => O(N) & AUX SPACE => O(1)

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

// TESTING

console.log(linearSearch([1, 2, 3, 4, 5], 3));
console.log(linearSearch([5, 3, 4, 11, 2], 5));
console.log(linearSearch([5, 3, 4, 11, 2], 7));
