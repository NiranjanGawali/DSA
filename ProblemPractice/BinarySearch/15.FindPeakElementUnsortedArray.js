/*

A peak element is an element that is strictly greater than its neighbors.
Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.
You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.
You must write an algorithm that runs in O(log n) time.

Example 1:
Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.

Example 2:
Input: nums = [1,2,1,3,5,6,4]
Output: 5
Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.


https://leetcode.com/problems/find-peak-element/description/

*/

function findPeakElement(arr) {
  let start = 0;
  let end = arr.length - 1;

  if (arr.length === 1) return 0;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (mid === 0) {
      if (arr[0] > arr[1]) {
        return 0;
      } else {
        return 1;
      }
    }

    if (mid === arr.length - 1) {
      if (arr[arr.length - 1] > arr[arr.length - 2]) {
        return arr.length - 1;
      } else {
        return arr.length - 2;
      }
    }

    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      return mid;
    } else if (arr[mid - 1] > arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
}

let arr = [1, 2, 3, 1];
// let arr = [1, 2, 1, 3, 5, 6, 4];

let result = findPeakElement(arr);
console.log('Result : ', result);

/**
 * Time Complexity:
 * - The algorithm uses binary search, which halves the search space at each step.
 * - Hence, the time complexity is O(log n), where n is the length of the array.
 *
 * Space Complexity:
 * - The space used by the algorithm is constant, as only a few variables are used.
 * - Therefore, the space complexity is O(1).
 */
