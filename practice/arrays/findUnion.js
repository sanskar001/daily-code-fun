/*
Union of Two Sorted Arrays with Duplicate Elements

Given two sorted arrays a[] and b[], where each array may contain duplicate elements , the task is to return the elements in the union of the two arrays in sorted order.

Union of two arrays can be defined as the set containing distinct common elements that are present in either of the arrays.

Examples:

Input: a[] = [1, 2, 3, 4, 5], b[] = [1, 2, 3, 6, 7]
Output: 1 2 3 4 5 6 7

Explanation: Distinct elements including both the arrays are: 1 2 3 4 5 6 7.
Input: a[] = [2, 2, 3, 4, 5], b[] = [1, 1, 2, 3, 4]
Output: 1 2 3 4 5

Explanation: Distinct elements including both the arrays are: 1 2 3 4 5.
Input: a[] = [1, 1, 1, 1, 1], b[] = [2, 2, 2, 2, 2]
Output: 1 2

Explanation: Distinct elements including both the arrays are: 1 2.
*/

function findUnion(a, b) {
  const result = [];
  const n = a.length;
  const m = b.length;

  let i = 0;
  let j = 0;
  let value;

  while (i < n || j < m) {
    if (a[i] < b[j] || !b[j]) {
      value = a[i];
      i++;
    } else if (a[i] === b[j]) {
      value = a[i];
      i++;
      j++;
    } else {
      value = b[j];
      j++;
    }

    if (value !== result[result.length - 1]) {
      result.push(value);
    }
  }

  return result;
}

// TESTING

console.log(findUnion([1, 2, 3, 4, 5], [1, 2, 3, 6, 7]));
console.log(findUnion([2, 2, 3, 4, 5], [1, 1, 2, 3, 4]));
console.log(findUnion([1, 1, 1, 1, 1], [2, 2, 2, 2, 2]));
