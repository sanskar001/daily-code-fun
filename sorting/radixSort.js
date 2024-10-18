// RADIX SORT 

/*

- Radix sort is a special sorting algorithm that works on list of number(base 10).
- It is not comparison sorting algorithm.
- It never makes comparisons between elements.
- It exploits the fact that information about the size of a number is encoded in the number of digits.
- More digits means a bigger number.

-----------------------------------

RADIX SORT HELPERS

  - getDigit(num, place) - returns the digit in num at the given place value.

  Example: 
          getDigit(12345, 0) // 5
          getDigit(12345, 1) // 4
          ...
          getDigit(12345, 5) // 0

  - digitCount(num) - returns the number of digits in num

  Example: 
          digitCount(12)   // 2
          digitCount(234)  // 3


  - mostDigits(nums) - Given the array of numbers, returns the number of digits in the largest numbers in list.

  Example: 
          mostDigits([1234, 2, 12])  // 4


  ----------------------------------------------------------------------------

  RADIX SORT PSEUDO CODE:

  1. Define a function that accepts list of numbers.

  2. Figure out how many digits the largest number has.

  3. Loop from k=0 up to this largest number of digits 

  4. For each iteration of the loop: 

      1. Create a bucket for each digit (0 to 9)
      2. Place each number in the corresponding bucket based on its kth digit.

  5. Replace our existing array with values in our buckets starting with 0 and going up to 9.

  6. return the list at the end!


 ==============================================

 TIME COMPLEXITY = O(N*K) ~ O(NLOGN) AND SPACE COMPLEXITY = O(N + K) 
  
 K => MOST DIGITS LENGTH;

*/

// getDigit function

function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// digitCount function

function digitCount(num) {
  if(num === 0) {
    return 1;
  }

  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// mostDigits function

function mostDigits(nums) {
  return nums.reduce((max, num) => Math.max(max, digitCount(num)), 0)
}

function radixSort(arr) {
  const mostDigitsValue = mostDigits(arr);

  for(let k = 0; k < mostDigitsValue; k++) {
    
    const bucket = Array.from({length: 10}, () => []);
    
    for(let i = 0; i < arr.length; i++) {
      const digit = getDigit(arr[i], k);
      bucket[digit].push(arr[i]);
    }

    arr = bucket.flat();
  }

  return arr;
}

// TESTING

radixSort([23, 344, 21, 12, 1, 7839, 4, 1232]);

