// Pattern Problem

// 1. Print Right Half Pyramid

function printRightHalfPyramid(height, char = "*") {
  for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += `${char} `;
    }
    console.log(row);
  }
}

// TESTING

// printRightHalfPyramid(5, "#")

/*

*
* *
* * *
* * * *
* * * * *

*/

// ===================================================

// 2. Print Left Half Pyramid

function printLeftHalfPyramid(height, char = "*") {
  for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = 1; j <= height; j++) {
      if (j > height - i) {
        row += `${char} `;
      } else {
        row += "  ";
      }
    }
    console.log(row);
  }
}

// TESTING

// printLeftHalfPyramid(5, "*");

/*
pritter-ignore
        * 
      * * 
    * * * 
  * * * * 
* * * * *
*/

// ===================================================

// 3. Print full Pyramid

function printFullPyramid(height, char = "*") {
  for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = 1; j <= height; j++) {
      if (j > height - i) {
        row += `${char} `;
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}

// TESTING

// printFullPyramid(5, "*");

/*
pritter-ignore
   
    * 
   * * 
  * * * 
 * * * * 
* * * * *
*/

// ===================================================

// 4. Inverted Right half Pyramid

function printInvertedRightHalfPyramid(depth, char = "*") {
  for (let i = depth; i > 0; i--) {
    let row = "";

    for (let j = i; j > 0; j--) {
      row += `${char} `;
    }

    console.log(row);
  }
}

// TESTING

// printInvertedRightHalfPyramid(5);

/*
pritter-ignore
   
* * * * * 
* * * * 
* * * 
* * 
* 

*/

// ===================================================

// 5. Inverted Left half Pyramid

function printInvertedLeftHalfPyramid(depth, char = "*") {
  for (let i = depth; i > 0; i--) {
    let row = "";

    for (let j = depth; j > 0; j--) {
      if (i < j) {
        row += "  ";
      } else {
        row += `${char} `;
      }
    }

    console.log(row);
  }
}

// TESTING

// printInvertedLeftHalfPyramid(5);

/*
pritter-ignore
   
* * * * * 
  * * * * 
    * * * 
      * * 
        * 

*/

// ===================================================

// 6. Inverted full Pyramid

function printInvertedFullPyramid(depth, char = "*") {
  for (let i = depth; i > 0; i--) {
    let row = "";

    for (let j = depth; j > 0; j--) {
      if (i < j) {
        row += " ";
      } else {
        row += `${char} `;
      }
    }

    console.log(row);
  }
}

// TESTING

// printInvertedFullPyramid(5);

/*
pritter-ignore
   
* * * * * 
 * * * * 
  * * * 
   * * 
    * 

*/

// ===================================================

// 7. Diamond pattern

function printDiamond(num, char = "*") {
  for (let i = 1; i <= num - 1; i++) {
    let row = "";
    for (let j = 1; j <= num - 1; j++) {
      if (j > num - i - 1) {
        row += `${char} `;
      } else {
        row += " ";
      }
    }
    row = " " + row;
    console.log(row);
  }
  printInvertedFullPyramid(num, char);
}

// TESTING

// printDiamond(5);

/*
pritter-ignore
   
    * 
   * * 
  * * * 
 * * * * 
* * * * * 
 * * * * 
  * * * 
   * * 
    * 

*/

// ===================================================

// 8. Hourglass pattern

function printHourglass(num, char = "*") {
  printInvertedFullPyramid(num, char);
  for (let i = 2; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= num; j++) {
      if (j > num - i) {
        row += `${char} `;
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}

// TESTING

// printHourglass(5);

/*
pritter-ignore
   
* * * * * 
 * * * * 
  * * * 
   * * 
    * 
   * * 
  * * * 
 * * * * 
* * * * * 


*/

// ===================================================

// 8. Hollow sqaure pattern

function printHollowSqaure(width, char = "*") {
  for (let i = 1; i <= width; i++) {
    if (i === 1 || i === width) {
      console.log(`${char} `.repeat(width));
    } else {
      const row = `${char} ${"  ".repeat(width - 2)}${char}`;
      console.log(row);
    }
  }
}

// TESTING

// printHollowSqaure(5);

/*
pritter-ignore
   
* * * * * 
*       *
*       *
*       *
* * * * * 

*/

// ===================================================

// 8. Hollow Pyramid pattern

function printHollowPyramid(height, char = "*") {
  for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = 1; j <= height; j++) {
      if (j > height - i) {
        row += `${char}_`;
      } else {
        row += "_";
      }
    }
    console.log(row);
  }
}

// TESTING

printHollowPyramid(5);

/*
pritter-ignore
   
* * * * * 
*       *
*       *
*       *
* * * * * 

*/
