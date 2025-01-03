/*
Reverse a Stack

You are given a stack St. You have to reverse the stack using recursion.

Example 1:

Input:
St = {3,2,1,7,6}
Output:
{6,7,1,2,3}
Explanation:
Input stack after reversing will look like the stack in the output.
Example 2:

Input:
St = {4,3,9,6}
Output:
{6,9,3,4}
Explanation:
Input stack after reversing will look like the stack in the output.
Your Task:

You don't need to read input or print anything. Your task is to complete the function Reverse() which takes the stack St as input and reverses the given stack.

Expected Time Complexity: O(N2)
Expected Auxiliary Space: O(1)
*/

function reverseStack(stack) {
  const n = stack.length;
  if (n === 0) {
    return [];
  }

  const poppedValue = stack.pop();
  return [poppedValue].concat(reverseStack(stack));
}

// TESTING

console.log(reverseStack([3, 2, 1, 7, 6]));
console.log(reverseStack([4, 3, 9, 6]));
