/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {
  // find min length string
  let minLenStr = strs.reduce(
    (min, str) => (min.length > str.length ? str : min),
    strs[0]
  );

  let result = "";

  for (let i = 0; i < minLenStr.length; i++) {
    let letter = minLenStr[i];

    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== letter) {
        return result;
      }
    }

    result += letter;
  }

  return result;
};
