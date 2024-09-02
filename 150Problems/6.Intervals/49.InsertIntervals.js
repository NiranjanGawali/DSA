/*

You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. 
You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

Note that you don't need to modify intervals in-place. You can make a new array and return it.

 
Example 1:
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

Example 2:
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 

Constraints:
0 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 105
intervals is sorted by starti in ascending order.
newInterval.length == 2
0 <= start <= end <= 105


https://leetcode.com/problems/insert-interval/description/?envType=study-plan-v2&envId=top-interview-150

*/

// Method 1
/*
function insertIntervals(intervals, newInterval) {
  let results = [];
  intervals.push(newInterval);
  intervals.sort((a, b) => a[0] - b[0]);

  let [currentStart, currentEnd] = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    let [start, end] = intervals[i];

    if (start <= currentEnd) {
      currentEnd = Math.max(end, currentEnd);
    } else {
      results.push([currentStart, currentEnd]);
      [currentStart, currentEnd] = [start, end];
    }
  }

  results.push([currentStart, currentEnd]); // Added last element of intervals array

  return results;
}

*/

// METHOD 2

function insertIntervals(intervals, newInterval) {
  let results = [];
  let n = intervals.length;

  let [newStart, newEnd] = newInterval;

  let i = 0;

  while (i < n && intervals[i][1] < newStart) {
    results.push(intervals[i]);
    i++;
  }

  while (i < n && intervals[i][0] <= newEnd) {
    let [start, end] = intervals[i];
    newStart = Math.min(newStart, start);
    newEnd = Math.max(newEnd, end);
    i++;
  }

  results.push([newStart, newEnd]);

  while (i < n) {
    results.push(intervals[i]);
    i++;
  }

  return results;
}

let intervals = [
    [1, 3],
    [6, 9],
  ],
  newInterval = [2, 5];

// let intervals = [
//     [1, 2],
//     [3, 5],
//     [6, 7],
//     [8, 10],
//     [12, 16],
//   ],
//   newInterval = [4, 8];

let result = insertIntervals(intervals, newInterval);
console.log('Result : ', result);

// METHOD 1
/*

Time Complexity: O(nlogn) -  Sorting takes nlogn and loop takes n, so final provided one.
Space Complexity: O(n) - We need array to store the result.

*/

// METHOD 2
/*

Time Complexity: O(n) 
Space Complexity: O(n) 

*/
