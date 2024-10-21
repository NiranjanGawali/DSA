/*

Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]

https://leetcode.com/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150

*/

// Method 1 : Rotate array using pop and unshift method.

/*

function rotateArray(nums, k) {
  for (let i = 0; i < k; i++) {
    let temp = nums.pop();
    nums.unshift(temp);
  }
  return nums;
}

let nums = [1, 2, 3, 4, 5, 6, 7],
  k = 3;

let result = rotateArray(nums, k);
console.log('Result : ', result);

*/

/*

Final Complexity:
Time Complexity: O(k * n), where n is the length of the array and k is the number of rotations.
Space Complexity: O(1) (constant space)

*/

// Method 2 : Rotate array using two pointers

function rotateArray(nums, k) {
  k = k % nums.length; // In case k is larger than nums.length. As if
  /*
    The output of k = 3 % 7 will be 3.

    Explanation:
    The modulo operator % returns the remainder when one number is divided by another.
    Here, 3 % 7 means "What is the remainder when 3 is divided by 7?"
    Since 3 is less than 7, dividing 3 by 7 gives 0 as the quotient and 3 as the remainder.
  */
  reverseArray(nums, 0, nums.length - 1);

  reverseArray(nums, 0, k - 1);

  reverseArray(nums, k, nums.length - 1);
}

function reverseArray(nums, start, end) {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}

let nums = [1, 2, 3, 4, 5, 6, 7],
  k = 3;

rotateArray(nums, k);
console.log('Result : ', nums);

/*
Time complexity : O(n)
Space complexity : O(1)
*/
