// flatten

/*
Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
*/

// function flatten(arr, depth = 0) {
//   const result = [];

//   function helper(inputArr, d) {
//     for (let i = 0; i < inputArr.length; i++) {
//       if (Array.isArray(inputArr[i]) && d > 0) {
//         helper(inputArr[i], d - 1);
//       } else {
//         result.push(inputArr[i]);
//       }
//     }
//   }

//   helper(arr, depth);

//   return result;
// }

// ===============================================

// USING MORDERN JAVASCRIPT

function flatten(arr, depth) {
  if (depth === 0) {
    return arr;
  }

  return arr.reduce((flat, item) => {
    if (Array.isArray(item)) {
      return flat.concat(flatten(item, depth - 1));
    } else {
      return flat.concat(item);
    }
  }, []);
}

// TESTING

// console.log(flatten([0, 1, 2, [3, 4]], 1));
console.log(flatten([0, 1, [2, [3, [4, 5]]]], 2));
