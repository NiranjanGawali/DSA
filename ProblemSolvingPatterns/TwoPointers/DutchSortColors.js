/*
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors 
in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 
Example 1:
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Example 2:
Input: nums = [2,0,1]
Output: [0,1,2]

Time complexity is O(n) and space complexity is O(1)
*/

function sortColors(nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
  return nums;
}

let nums = [2, 0, 2, 1, 1, 0];
// let nums = [2, 0, 1];
let result = sortColors(nums);
console.log('Result : ', result); // Output: [0, 0, 1, 1, 2, 2]

// [2,0,1] - low = 0, mid = 0, high = 2
// [1,0,2] - low = 0, mid = 0, high = 1
// [1,0,2] - low = 0, mid = 1, high = 1
// [0,1,2] - low = 1, mid = 2, high = 1 , since mid is less than and equal to high, break from the loop
