// stringifyNumbers
/*
Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

The exercise intends for you to create a new object with the numbers converted to strings, and not modify the original. Keep the original object unchanged.


let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

stringifyNumbers(obj)

{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

// USING PURE RECURSION

function stringifyNumbers(obj) {
  let newObj = { ...obj };

  for (let key in newObj) {
    if (Number.isFinite(newObj[key])) {
      newObj[key] = newObj[key].toString();
    } else if (typeof newObj[key] === "object") {
      newObj[key] = stringifyNumbers(newObj[key]);
    }
  }

  return newObj;
}

// TESTIN

const obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));
