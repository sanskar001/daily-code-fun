// Quick Sort

/*
- Like merge sort, exploit the fact that arrays of 0 and 1 element are always sorted.
- Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array.


PIVOT HELPER:

1. In order to implement quick sort, it is useful to first implement a function responsible of arranging elements in a array on the either side of a pivot.

2. Given an array, this helper function should designate an element as the pivot.

3. It should the rearrage elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than pivot are moved to right of the pivot.

4. The order of elements on the either side of pivot does not matter.

5. The helper should do this in-place, that is it should not create a new array.

6. When complete, the helper should return the index of the pivot.

-------------------------------

PICKING A PIVOT [IMPORTANT]:

Example: 

arr: [5, 2, 1, 8, 4, 7, 6, 3]

pivot(arr); // 4

arr => [2, 1, 4, 3, 5, 8, 7, 6] (Or there are other acceptable mutations too!)

1. The runtime of quick sort depends in part on how one selects the pivot.

2. Ideally, the pivot should be chosen so that it's roughly the median value in the data set you are sorting.

3. For simplicity, we will always choose the pivot to be the first element.


-------------------------------

PIVOT PSEUDO CODE

1. It will help to accept three arguments: an array, a start index, and an end index 
(these can default to 0 and the array length minus 1 respectively)

2. Grab the pivot from the start of the array.

3. Store the current pivot index in a variable(this will keep track of where the pivot should end up).

4. Loop through the array from start to end: 

    - If the pivot is greater than the current element, increment the pivot index variable and 
    then swap the element with the element at the pivot index.

5. Swap the starting element(i.e the pivot) with the pivot index.

6. Return the pivot index.


============================================================================

QUICK SORT PSEUDO CODE:

1. Call the pivot helper on the array.

2. When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray
   to the left of the index, and the subarray to the right of that index.

3. Your base case occurs when you consider a subarray with less than 2 elements.

/////////////////////

[GOOD AND AVERAGE CASE]

TIME COMPLEXITY = O(N LOGN) AND AUX SPACE COMPLEXITY = O(LOGN)

[WORST CASE]

TIME COMPLEXITY = O(N^2) AND AUX SPACE COMPLEXITY = O(LOGN)

*/

// PIVOT HELPER function

function pivot(arr, start = 0, end = arr.length) {

  let pivotIndex = start;
  let swapIndex = start;

  for(let i = start + 1; i < end; i++) {

    if(arr[pivotIndex] > arr[i]) {
      swapIndex++;

      // Swap pivot index with i element
      [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
    }
  }

  // swap "swapIndex" with "pivotIndex" element
  [arr[swapIndex], arr[pivotIndex]] = [arr[pivotIndex], arr[swapIndex]];
  
  return swapIndex;
}

// ---------------------------------------------------------

// QUICK SORT function

function quickSort(arr, start = 0, end = arr.length) {

  if(start < end) {
    const pivotIndex = pivot(arr, start, end);

    // Left side 
    quickSort(arr, start, pivotIndex);
  
    // Right side
    quickSort(arr, pivotIndex + 1, end);
  }

  return arr;
}


// TESTING

quickSort([4, 8, 2, 1, 5, 7, 6, 3]);
quickSort([4, 6, 9, 1, 2, 5]);
