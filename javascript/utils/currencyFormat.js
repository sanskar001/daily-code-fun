/*
Implement a Currency Formatting Utility | JavaScript Interview Question

You have to implement a simple currency formatting utility.

function format(n) {
    ....
}

const responseOne = format(123456789);
123,456,789

const responseTwo = format(123);
123
*/

function format(n) {
  if (typeof n !== "number") {
    throw new TypeError("n must be number!");
  }

  let ans = "";
  const numStr = n.toString();
  const len = numStr.length;

  for (let i = len - 1; i >= 0; i--) {
    ans = numStr[i] + ans;

    if (i !== 0 && (len - i) % 3 === 0) {
      ans = "," + ans;
    }
  }

  return ans;
}

console.log(format(1000));
console.log(format(100));
console.log(format(100000));
console.log(format(123456789));
console.log(format(""));
