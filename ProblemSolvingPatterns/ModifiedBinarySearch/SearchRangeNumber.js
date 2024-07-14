/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Example 3:
Input: nums = [], target = 0
Output: [-1,-1]
*/

function searchRange(nums, target) {
  let results = [-1, -1];

  // Searching the first occurcence, so when found the match we are searching again in right side of array
  results[0] = binarySearch(nums, target, false);

  if (results[0] !== -1) {
    // Searching the last occurcence, so when found the match we are searching again in left side of array
    results[1] = binarySearch(nums, target, true);
  }
  return results;
}

function binarySearch(nums, key, findMaxIndex) {
  let numIndex = -1;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === key) {
      numIndex = mid;
      if (findMaxIndex) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else if (nums[mid] < key) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return numIndex;
}

console.log(searchRange([4, 6, 6, 6, 9], 6)); //[1, 3]
console.log(searchRange([1, 3, 8, 10, 15], 10)); //[3, 3]
console.log(searchRange([1, 3, 8, 10, 15], 12)); //[-1,-1]
