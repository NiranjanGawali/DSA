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

// Method 1: Brute force way
/*
function targetSumArray(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [-1, -1];
}

let numbers = [2, 7, 11, 15],
  target = 9;

let result = targetSumArray(numbers, target);
console.log('Target Sum indexes : ', result);

/*
Time Complexity: O(n^2) 
Space Complexity: 1
*/

// Method 2: Using map
/*
function targetSumArray(nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    // if (map.hasOwnProperty(diff)) {
    //   return [map[diff], i];
    // }
    if (diff in map) {
      return [map[diff], i];
    }

    map[nums[i]] = i;
  }

  return [-1, -1];
}

let numbers = [2, 7, 11, 15],
  target = 9;

let result = targetSumArray(numbers, target);
console.log('Target Sum indexes : ', result);

/*
Time Complexity: O(n) 
Space Complexity: O(n) 
*/

// Method using two pointers - only words for asceding sorted array

function targetSumArray(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  // sorting an array if its unsorted
  //   nums.sort((a, b) => a - b);

  while (start < end) {
    let sum = nums[start] + nums[end];
    if (sum === target) {
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

let result = targetSumArray(numbers, target);
console.log('Target Sum indexes : ', result);

/*
Time Complexity: O(n) 
Space Complexity: O(1) 
*/

// If we consider adding function to sort the array, hence time complexity will be O(nlogn)
