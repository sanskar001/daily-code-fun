// Union of Two Sorted Arrays

/*
Problem Statement: Given two sorted arrays, arr1, and arr2 of size n and m. Find the union of two sorted arrays.

The union of two arrays can be defined as the common and distinct elements in the two arrays.NOTE: Elements in the union should be in ascending order.

Examples
Example 1:
Input:

n = 5,m = 5.
arr1[] = {1,2,3,4,5}  
arr2[] = {2,3,4,4,5}
Output:

 {1,2,3,4,5}

Explanation: 

Common Elements in arr1 and arr2  are:  2,3,4,5
Distnict Elements in arr1 are : 1
Distnict Elemennts in arr2 are : No distinct elements.
Union of arr1 and arr2 is {1,2,3,4,5} 

Example 2:
Input:

n = 10,m = 7.
arr1[] = {1,2,3,4,5,6,7,8,9,10}
arr2[] = {2,3,4,4,5,11,12}
Output:
 {1,2,3,4,5,6,7,8,9,10,11,12}
Explanation:
 
Common Elements in arr1 and arr2  are:  2,3,4,5
Distnict Elements in arr1 are : 1,6,7,8,9,10
Distnict Elemennts in arr2 are : 11,12
Union of arr1 and arr2 is {1,2,3,4,5,6,7,8,9,10,11,12} 
*/

// SOLUTION-1 --- TIME => O(n*logn) & AUX SPACE => O(N)

// function union(arr1, arr2) {
//   const n = arr1.length;
//   const m = arr2.length;

//   // Step1: Concat both arrays
//   const result = [...arr1, ...arr2];

//   // Step2: Sort the result array in ascending order
//   result.sort((a, b) => a - b);

//   // Step3: Delete all the recurring elements in result array using twp pointer approch
//   let i = 0;

//   for (let j = 1; j < n + m; j++) {
//     if (result[j] === result[i]) {
//       continue;
//     } else {
//       i++;
//       result[i] = result[j];
//     }
//   }

//   // Step4: Poppped last values by "((n + m) - (i + 1))" times
//   while (i + 1 < n + m) {
//     result.pop();
//     i++;
//   }

//   return result;
// }

// SOLUTION-2 - TWO POINTER APPROACH ---- TIME => O(N+M) & AUX SPACE => O(N+M)

function union(arr1, arr2) {
  const n = arr1.length;
  const m = arr2.length;
  const result = [];

  let i = 0;
  let j = 0;

  while (i < n || j < m) {
    let value;
    if (arr1[i] === arr2[j]) {
      value = arr1[i];
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      value = arr1[i];
      i++;
    } else {
      value = arr2[j];
      j++;
    }

    if (value !== result[result.length - 1]) {
      result.push(value);
    }
  }

  return result;
}

// TESTING

console.log(union([1, 2, 3, 4, 5], [2, 3, 4, 4, 5]));
console.log(union([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 4, 5, 11, 12]));
