/*
Companies
Given an array of positive integers nums and a positive integer target, return the minimal length of a 
subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 
Example 1:
Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

Example 2:
Input: target = 4, nums = [1,4,4]
Output: 1

Example 3:
Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
*/

// Below is the solution using sliding window patten

function minSubArrayLen(target, arr) {
  let minSubArrayLen = Number.MAX_VALUE;
  let end = 0;
  let start = 0;
  let tempSum = 0;

  while (end < arr.length) {
    tempSum += arr[end];

    while (tempSum > target) {
      tempSum -= arr[start];
      start++;
    }

    if (tempSum === target) {
      minSubArrayLen = Math.min(minSubArrayLen, end - start + 1);
    }

    end++;
  }
  return minSubArrayLen === Number.MAX_VALUE ? 0 : minSubArrayLen;
}

let target = 7,
  nums = [2, 3, 1, 2, 4, 3];

// let target = 4,
//   nums = [1, 4, 4];

// let target = 11,
//   nums = [1, 1, 1, 1, 1, 1, 1, 1];

let result = minSubArrayLen(target, nums);
console.log('Result : ', result);
