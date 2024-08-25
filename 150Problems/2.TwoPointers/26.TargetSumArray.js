/*

Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] 
and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

Example 1:
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

Example 2:
Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

Example 3:
Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
 

Constraints:

2 <= numbers.length <= 3 * 104
-1000 <= numbers[i] <= 1000
numbers is sorted in non-decreasing order.
-1000 <= target <= 1000
The tests are generated such that there is exactly one solution.

https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/?envType=study-plan-v2&envId=top-interview-150

*/

// Method 1: Brute force approach
/*
function returnTargetSumIndices(nums, target) {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [-1, -1];
}
*/

// Method 2: Solving using map
/*
function returnTargetSumIndices(nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (diff in map) {
      return [map[diff], i];
    }

    map[nums[i]] = i;
  }

  return [-1, -1];
}
*/

// Method 3: Solving using two pointers
function returnTargetSumIndices(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    let sum = nums[start] + nums[end];

    if (target === sum) {
      return [start, end];
    }

    if (sum < target) {
      start++;
    } else {
      end--;
    }
  }

  return [-1, -1];
}

let numbers = [2, 7, 11, 15],
  target = 9;

let result = returnTargetSumIndices(numbers, target);
console.log('Result : ', result);

// Time and sapce complexity of method 1
/*
Time Complexity: O(n^2) 
Space Complexity: 1
*/

// Time and sapce complexity of method 2
/*
Time Complexity: O(n) 
Space Complexity: O(n) 
*/

// Time and sapce complexity of method 3
/*
Time Complexity: O(n) 
Space Complexity: O(1) 
*/
