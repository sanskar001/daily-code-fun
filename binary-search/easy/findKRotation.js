/*
Find Kth Rotation

Given an increasing sorted rotated array arr of distinct integers. The array is right-rotated k times. Find the value of k.
Let's suppose we have an array arr = [2, 4, 6, 9], so if we rotate it by 2 times so that it will look like this:
After 1st Rotation : [9, 2, 4, 6]
After 2nd Rotation : [6, 9, 2, 4]
*/

// SOLUTION --- FINDING PIVOT => O(logn)

function findKRotation(arr) {
  const n = arr.length;

  let left = 0;
  let right = n - 1;

  if (arr[left] < arr[right]) return 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] < arr[mid - 1]) {
      return mid;
    }

    if (arr[0] > arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return 0;
}
