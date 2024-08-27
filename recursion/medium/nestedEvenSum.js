// nestedEvenSum

/*
Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10
*/

// USING HELPER METHOD RECURSION

// function nestedEvenSum(obj) {
//   let sum = 0;

//   function helper(inputObj) {
//     for (let key in inputObj) {
//       let value = inputObj[key];

//       if (Number.isFinite(value) && value % 2 === 0) {
//         sum += value;
//       } else if (typeof value === "object") {
//         helper(value);
//       }
//     }
//   }

//   helper(obj);

//   return sum;
// }

// ===================================================

// USING PURE RECURSION

function nestedEvenSum(inputObj) {
  let sum = 0;

  for (let key in inputObj) {
    let value = inputObj[key];

    if (Number.isFinite(value) && value % 2 === 0) {
      sum += value;
    } else if (typeof value === "object") {
      sum += nestedEvenSum(value);
    }
  }

  return sum;
}

// TESTING

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
