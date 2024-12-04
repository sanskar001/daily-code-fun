// Recursive Bubble Sort

/*
Example 1:
Input: N = 6, array[] = {13,46,24,52,20,9}
Output: 9,13,20,24,46,52
Explanation: After sorting we get 9,13,20,24,46,52

Example 2:
Input: N = 5, array[] = {5,4,3,2,1}
Output: 1,2,3,4,5
Explanation: After sorting we get 1,2,3,4,5
*/

function recursiveBubbleSort(arr) {

    const size = arr.length;

    if(size <= 1) {
        return arr;
    }

    for(let i = 0; i < size - 1; i++) {
        if(arr[i] > arr[i+1]) {
            [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        }
    }

    return recursiveBubbleSort(arr.slice(0, size - 1)).concat(arr[size-1]);
}

// TESTING

console.log(recursiveBubbleSort([13,46,24,52,20,9]));
console.log(recursiveBubbleSort([4, 3, 2, 1]));
