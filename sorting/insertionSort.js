// Insertion Sort

/*

Builds up the sort by gradually creating a larger left half which is always sorted.

Example: 

[5, 3, 4, 1, 2] Sorted Half = [5]
[3, 5, 4, 1, 2] Sorted = [3, 5]
[3, 4, 5, 1, 2] Sorted = [3, 4, 5]
[1, 3, 4, 5, 2] Sorted = [1, 3, 4, 5]
[1, 2, 3, 4, 5]

Pseduo Code:

1. Start by picking the second element in array.
2. Now compare the second element with one before it and swap if necessary.
3. Continue to the next element and if it is in incorrect order, iterate through the sorted portion (left side) to place the element in the correct place.
4. Repeat until the array is sorted.


TIME COMPLEXITY => O(N^2) & AUX SPACE COMPLEXITY => O(1)
*/

function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] < arr[j]) {
        // Swap
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i = j;
      }
    }
  }

  return arr;
}

// Another way

// function insertionSort2(arr) {
//   const n = arr.length;

//   for (let i = 1; i < n; i++) {
//     const currentValue = arr[i];

//     for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
//       arr[j + 1] = arr[j];
//     }

//     arr[j + 1] = currentValue;
//   }

//   return arr;
// }

// TESTING

console.log(insertionSort([5, 3, 4, 1, 2]));
console.log(insertionSort([5, 4, 3, -2, 1]));
console.log(insertionSort([6, 5, 3, 4, 2, 1]));
console.log(insertionSort2([6, 1, 2, 3, 4, 5])); // almost sorted array
