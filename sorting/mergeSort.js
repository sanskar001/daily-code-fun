// Merge Sort

/*
- It is combination of three things: Splitting, Merging and Sorting
- Exploits the fact that arrays of 0 or 1 (length) element are always sorted.
- Works by decomposing an array into small arrays of 0 and 1 elements, then building up a newly sorted array.

- Note: It is divide and conquer algorithm.

PSEUDO CODE:

1. Break up the array into halves until you have arrays that are empty or have one element.

2. Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array.

3. Once the array has been merged back together, return the merged (and sorted) array.

TIME COMPLEXITY = O(N LOGN) AND AUX SPACE COMPLEXITY = O(N)

*/

// Function to merged two sorted arrays.
function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  const result = [];

  while (i < arr1.length || j < arr2.length) {
    if (!arr2[j] || arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length == 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

// TESTING

// console.log(merge([1, 10, 11], [2, 3, 5, 12, 15]));
// console.log(merge([5], [10]));

console.log(mergeSort([8, 3, 5, 4, 7, 6, 1, 2]));
