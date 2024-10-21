/*

Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

Example 1:
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Example 2:
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 
Constraints:
1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.

https://leetcode.com/problems/squares-of-a-sorted-array/description/
*/

function squareOfArray(nums) {
  let result = new Array(nums.length);
  let left = 0;
  let right = nums.length - 1;
  let index = nums.length - 1;

  while (left <= right) {
    let leftVal = nums[left] ** 2;
    let rightVal = nums[right] ** 2;

    if (leftVal > rightVal) {
      result[index] = leftVal;
      left++;
    } else {
      result[index] = rightVal;
      right--;
    }
    index--;
  }

  return result;
}

// let nums = [-4, -1, 0, 3, 10];
let nums = [-7, -3, 2, 3, 11];

let result = squareOfArray(nums);

console.log('Result : ', result);

/*
Time Complexity: O(n) 
Space Complexity: O(n) // where n is size of the array
*/
