// Best Time to Buy and Sell Stock

/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
*/

// SOLUTION-1 ----- TIME => O(N^2) & AUX SPACE => O(1)

// var maxProfit = function (prices) {
//   if (prices.length < 2) {
//     return 0;
//   }

//   let max = 0;

//   for (let i = 0; i < prices.length - 1; i++) {
//     const buyPrice = prices[i];

//     for (let j = i + 1; j < prices.length; j++) {
//       const sellPrice = prices[j];
//       const profit = sellPrice - buyPrice;
//       max = Math.max(profit, max);
//     }
//   }

//   return max;
// };

////////////////////////////////////////////////////////////////

// SOLUTION-2 ----- TIME => O(N) & AUX SPACE => O(1)

// USING TWO POINTER APPROACH

var maxProfit = function (prices) {
  const n = prices.length;

  if (n < 2) {
    return 0;
  }

  let maxProfit = 0;
  let buyPrice = prices[0];

  for (let i = 1; i < n; i++) {
    const profit = prices[i] - buyPrice;

    if (buyPrice > prices[i]) {
      buyPrice = prices[i];
    } else if (profit > maxProfit) {
      maxProfit = profit;
    }
  }

  return maxProfit;
};

// TESTING

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
console.log(maxProfit([1, 2, 3, 4, 5])); // 4
