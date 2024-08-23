// Pascal Triangle

// TIME => O(N^2) &  AUX SPACE => O(N^2)

var generate = function (numRows) {
  const result = [];

  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      result.push([1]);
      continue;
    }

    const temp = new Array(i + 1);
    const last = result[i - 1];
    for (let j = 0; j < i + 1; j++) {
      let sum = (last[j - 1] || 0) + (last[j] || 0);
      temp[j] = sum;
    }

    result.push(temp);
  }

  return result;
};

// TESTING

console.log(generate(5));
console.log(generate(1));
console.log(generate(2));
console.log(generate(3));
