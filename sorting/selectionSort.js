// Selection Sort

/*

Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position.

Pseduo Code:

1. Store the first element as the smallest value you have seen so far.
2. Compare this item to next items in the array until you find a smaller number.
3. If the smaller is not found, designate that smaller number to be the new "minimum" and continue until the end of the array.
4. If the "minimum" is not the value (index) you initially began with, swap the two values.
5. Repeat this with the next element until the array sorted.


TIME COMPLEXITY => O(N^2) & AUX SPACE COMPLEXITY => O(1)


Note: It is potentially better than bubble sort because here we are doing less number of swapping. But not good for already sorted sorted array.
*/

function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i; j < n; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    if (minIndex != i) {
      // Swap
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
  }

  return arr;
}

// TESTING

console.log(selectionSort([5, 3, 4, 1, 2]));
console.log(selectionSort([5, 4, 3, -2, 1]));
console.log(selectionSort([6, 5, 3, 4, 2, 1]));
console.log(selectionSort([6, 1, 2, 3, 4, 5])); // almost sorted array
