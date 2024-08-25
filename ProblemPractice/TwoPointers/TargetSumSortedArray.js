/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
 
You can return the answer in any order.
 
 Example 1:
 Input: nums = [2,7,11,15], target = 9
 Output: [0,1]
 Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 
 Example 2:
 Input: nums = [3,2,4], target = 6
 Output: [1,2]
 
 Example 3:
 Input: nums = [3,3], target = 6
 Output: [0,1]

*/

// Solution via brute force approach
/*

function targetSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [nums[i], nums[j]];
      }
    }
  }
}

let nums = [2, 7, 11, 15],
  target = 9;

let result = targetSum(nums, target);
console.log('Result : ', result);

// Time complexity : O(N^2)
// Space complexity: O(1)

*/

// Solution using map
/*
function targetSum(nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (diff in map) {
      return [i, map[diff]];
    }

    map[nums[i]] = i;
  }

  return [-1, -1];
}

let nums = [2, 7, 11, 15],
  target = 9;

let result = targetSum(nums, target);
console.log('Result : ', result);

// Time complexity : O(N)
// Space complexity: O(N)
*/

// Most optimal solution without using any external data structure

function targetSum(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    let sum = nums[start] + nums[end];
    if (sum === target) {
      return [nums[start], nums[end]];
    }

    if (sum < target) {
      start++;
    } else {
      end--;
    }
  }
}

let nums = [2, 7, 11, 15],
  target = 9;

let result = targetSum(nums, target);
console.log('Result : ', result);

// Time complexity : O(N)
// Space complexity: O(1)
