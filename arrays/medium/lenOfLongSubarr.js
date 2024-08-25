// Longest Sub-Array with Sum K

/*
Given an array arr containing n integers and an integer k. Your task is to find the length of the longest Sub-Array with the sum of the elements equal to the given value k. 

Examples:
 
Input :
arr[] = {10, 5, 2, 7, 1, 9}, k = 15
Output : 4
Explanation:
The sub-array is {5, 2, 7, 1}.


Input : 
arr[] = {-1, 2, 3}, k = 6
Output : 0
Explanation: 
There is no such sub-array with sum 6.
*/

// SOLUTION-1 ---- TIME => O(N^2) & AUX SPACE => O(1)

// function lenOfLongSubarr(arr, n, k) {
//   let maxLen = 0;

//   for (let i = 0; i < n; i++) {
//     let sum = 0;
//     let len = 0;
//     for (let j = i; j < n; j++) {
//       sum += arr[j];
//       len++;
//       if (sum === k) {
//         maxLen = Math.max(len, maxLen);
//       }
//     }
//   }

//   return maxLen;
// }

///////////////////////////////////////////////////////////////////////////

// SOLUTION-2 --- USING HASHING --- TIME => O(N) & AUX SPACE => O(N)

// function lenOfLongSubarr(arr, n, k) {
//   let maxLen = 0;
//   let memory = {};
//   let prefixSum = 0;
//   let remainSum = 0;

//   for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];

//     if (prefixSum === k) {
//       maxLen = Math.max(maxLen, i + 1);
//     }

//     remainSum = prefixSum - k;

//     if (memory.hasOwnProperty(remainSum)) {
//       maxLen = Math.max(maxLen, i - memory[remainSum]);
//     }

//     if (!memory.hasOwnProperty(prefixSum)) {
//       memory[prefixSum] = i;
//     }
//   }

//   return maxLen;
// }

//////////////////////////////////////////////////////////////////////////////

// TIME => O(N) & AUX SPACE => O(1)
// USING TWO POINTER APPROACH  ----- only for positive integer

function lenOfLongSubarr(arr, n, k) {
  let maxLen = 0;
  let sum = 0;
  let i = 0;
  let j = 0;

  while (i <= j && j <= n) {
    if (sum === k) {
      maxLen = Math.max(maxLen, j - i);
      sum = sum - arr[i];
      i++;
    } else if (sum > k) {
      sum = sum - arr[i];
      i++;
    } else {
      sum += arr[j];
      j++;
    }
  }

  return maxLen;
}

// TESTING

console.log(lenOfLongSubarr([10, 5, 2, 7, 1, 9], 6, 15)); // 2
console.log(lenOfLongSubarr([1, 2, 3, 5, 9, 1], 6, 10)); // 3
console.log(lenOfLongSubarr([1, -1, 2, 3], 4, 1)); // 2
console.log(lenOfLongSubarr([1, 0, 0, 0, 3], 5, 3)); // 4
