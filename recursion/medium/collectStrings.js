// collectStrings

/*
Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj) // ["foo", "bar", "baz"])
*/

// USING PURE RECURSION

function collectStrings(obj) {
  let result = [];

  for (let key in obj) {
    const value = obj[key];

    if (typeof value === "string") {
      result.push(value);
    } else if (typeof value === "object") {
      result = result.concat(collectStrings(value));
    }
  }

  return result;
}

// TESTING

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj));
