/*
56. Merge Intervals

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].


Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

*/

// SOLUTION-1 => TIME COMPLEXITY => O(N-LOGN)

var mergeIntervals = function (intervals) {
  const n = intervals.length;
  const result = [];

  // sort interval on the basis of start value of interval
  intervals.sort((r1, r2) => r1[0] - r2[0]);

  if (n >= 1) {
    result.push(intervals[0]);
  }

  for (let i = 0, j = 1; j < n; j++) {
    const currentInterval = intervals[j];

    if (currentInterval[0] <= result[i][1]) {
      result[i][1] = Math.max(result[i][1], currentInterval[1]);
    } else {
      result.push(currentInterval);
      i++;
    }
  }

  return result;
};

// TESTING

console.log(
  mergeIntervals([
    [1, 3],
    [2, 6],
    [4, 7],
    [8, 10],
    [9, 12],
    [15, 18],
  ])
);
console.log(
  mergeIntervals([
    [1, 4],
    [4, 5],
  ])
);

console.log(
  mergeIntervals([
    [1, 4],
    [0, 4],
  ])
);
