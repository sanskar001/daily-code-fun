// reverse

/*
Write a recursive function called reverse which accepts a string and returns a new string in reverse.
*/

function reverse(str) {
  if (str.length <= 1) {
    return str;
  }

  return reverse(str.slice(1)).concat([str[0]]);
}

// TESTING

console.log(reverse("abc"));
console.log(reverse("sanskar"));
console.log(reverse("HELLO"));
