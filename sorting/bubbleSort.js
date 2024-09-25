// Bubble Sort

/*
Pseduo Code:

1. Start looping from with a variable called i the end of the array towards the beginning.
2. Start an inner loop with a variable called j from 0 to i-1.
3. If arr[j] is greater than arr[j+1] then swap those two values.
4. Return sorted array.


TIME COMPLEXITY => O(N^2) & AUX SPACE COMPLEXITY => O(1)
*/

// function bubbleSort(arr) {
//   let n = arr.length;

//   for (let i = n; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         // Swapping
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }

//   return arr;
// }

// ====================================================

// OPTIMIZATION - When input array is almost sorted then why we need iterate these much times.

function bubbleSort(arr) {
  let n = arr.length;
  let count = 0;

  for (let i = n; i > 0; i--) {
    let noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwap = false;
      }

      count++;
    }

    // If in last iteration there was no swap, then we can drop it.
    if (noSwap) {
      break;
    }
  }

  return { arr, count };
}

// TESTING

console.log(bubbleSort([5, 3, 4, 1, 2]));
console.log(bubbleSort([5, 4, 3, 2, 1]));
console.log(bubbleSort([6, 5, 3, 4, 2, 1]));
console.log(bubbleSort([6, 1, 2, 3, 4, 5])); // almost sorted array
