// productOfArray

/*
Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
*/

function productOfArray(nums) {
  if (nums.length === 0) {
    return 1;
  }

  const last = nums.pop();

  return last * productOfArray(nums);
}

// TESTING

console.log(productOfArray([1, 2, 3, 4])); // 24
console.log(productOfArray([1, 2, 3, 0])); // 0
console.log(productOfArray([1, 2, 3, -3])); // -18
