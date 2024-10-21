/*

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
 
Constraints:
1 <= target <= 109
1 <= nums.length <= 105
1 <= nums[i] <= 104


https://leetcode.com/problems/minimum-size-subarray-sum/description/

*/

function findMinSubArrayWithGivenSum(nums, target) {
  let start = 0;
  let end = 0;

  let minLength = Number.MAX_SAFE_INTEGER;
  let sum = 0;

  while (end < nums.length) {
    sum += nums[end];

    while (sum > target) {
      sum -= nums[start];
      start++;
    }

    if (sum === target) {
      minLength = Math.min(minLength, end - start + 1);
    }

    end++;
  }

  return minLength === Number.MAX_SAFE_INTEGER ? 0 : minLength;
}

let target = 7,
  nums = [2, 3, 1, 2, 4, 3];

let result = findMinSubArrayWithGivenSum(nums, target);
console.log('Result : ', result);

/*
Time Complexity: O(n) - n is length of the array
Space Complexity: O(1)
*/
