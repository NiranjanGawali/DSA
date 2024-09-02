/*

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

Example 2:
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 
Constraints:
1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104

https://leetcode.com/problems/merge-intervals/description/?envType=study-plan-v2&envId=top-interview-150

*/

function mergeIntervals(intervals) {
  let results = [];
  intervals.sort((a, b) => a[0] - b[0]);
  console.log(intervals);
  let [currentStart, currentEnd] = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    let [start, end] = intervals[i];
    if (start <= currentEnd) {
      currentEnd = Math.max(currentEnd, end);
    } else {
      results.push([currentStart, currentEnd]);
      [currentStart, currentEnd] = [start, end];
    }
  }

  results.push([currentStart, currentEnd]);

  return results;
}

let intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

let result = mergeIntervals(intervals);

console.log('Result : ', result);

/*

Time Complexity: O(nlogn) -  Sorting takes nlogn and loop takes n, so final provided one.
Space Complexity: O(n) - We need array to store the result.

*/
