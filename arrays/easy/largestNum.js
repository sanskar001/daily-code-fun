// Largest Element in Array

// Given an array arr, the task is to find the largest element in it.

// Time complexity - O(N) and Aux Space complexity - O(1)

const largest = function(n, arr) {
        
    let max = arr[0];
    
    for(let i = 0; i < arr.length; i++){
        max = max < arr[i] ? arr[i] : max;
    }
    
    return max;
}
