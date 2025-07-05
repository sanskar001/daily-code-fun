/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// var strStr = function (haystack, needle) {

//     if(haystack === needle) {
//         return 0;
//     }

//   for (let i = 0; i < haystack.length; i++) {
//     let j = 0;

//     if (haystack[i] === needle[j]) {
//       j++;
//       while (haystack[i + j] === needle[j]) {
//         j++;
//       }
//     }

//     if (j === needle.length) {
//       return i;
//     }
//   }

//   return -1;
// };


var strStr = function(haystack, needle) {
    const hLen = haystack.length;
    const nLen = needle.length;
    
    if (nLen === 0) {
        return 0;
    }
    
    let i = 0;
    while (i < hLen) {
        let nIndex = 0;
        let j = i;
        
        while (j < hLen && nIndex < nLen && haystack[j] === needle[nIndex]) {
            j++;
            nIndex++;
        }
        
        if (nIndex === nLen) {
            return i;
        }
        
        i++;
    }
    
    return -1;
};
