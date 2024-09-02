var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sFreq = {};
  const tFreq = {};

  for (let l of s) {
    sFreq[l] = (sFreq[l] || 0) + 1;
  }

  for (let l of t) {
    tFreq[l] = (tFreq[l] || 0) + 1;
  }

  for (let key in sFreq) {
    if (sFreq[key] !== tFreq[key]) {
      return false;
    }
  }

  return true;
};

// TESTING

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("tar", "car"));
