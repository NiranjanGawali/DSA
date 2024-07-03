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
  let minLength = Number.MAX_VALUE;
  let sum = 0;
  let startIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    while (sum >= target) {
      minLength = Math.min(minLength, i - startIndex + 1);
      sum -= arr[startIndex];
      startIndex++;
    }
  }

  return minLength === Number.MAX_VALUE ? 0 : minLength;
}

let result = minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);
console.log('Result : ', result);
