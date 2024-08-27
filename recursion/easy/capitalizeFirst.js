// capitalizeFirst

/*
Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
*/

function capitalizeFirst(arr) {
  if (arr.length === 0) {
    return [];
  }

  const lastString = arr.pop();
  const capitalizeFirstLast = lastString[0].toUpperCase() + lastString.slice(1);

  return capitalizeFirst(arr).concat(capitalizeFirstLast);
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
