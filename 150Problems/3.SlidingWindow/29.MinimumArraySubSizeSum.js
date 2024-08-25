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
 

Follow up: If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log(n)).

*/

function findMinArraySubsizeSum(nums, target) {
  if (target === 0) return [];

  let start = 0,
    end = 0;

  let currentSum = 0;
  let minSubArrayLen = Number.MAX_VALUE;

  while (end < nums.length) {
    currentSum += nums[end];

    while (currentSum > target) {
      currentSum -= nums[start];
      start++;
    }

    if (currentSum === target) {
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

let result = findMinArraySubsizeSum(nums, target);
console.log('Result : ', result);

/*
Time Complexity: O(n) 
Space Complexity: O(1) 
*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Below code modified to return sub array not the length

/*

function findMinArraySubsizeSum(nums, target) {
  if (target === 0) return [];

  let start = 0,
    end = 0;

  let currentSum = 0;
  let minSubArrayLen = Number.MAX_VALUE;

  while (end < nums.length) {
    currentSum += nums[end];

    while (currentSum > target) {
      currentSum -= nums[start];
      start++;
    }

    if (currentSum === target) {
      minSubArrayLen = Math.min(end - start + 1, minSubArrayLen);
    }

    end++;
  }

  return minSubArrayLen === Number.MAX_VALUE ? [] : nums.slice(start, end + 1);
}

let target = 7,
  nums = [2, 3, 1, 2, 4, 3];

// let target = 4,
//   nums = [1, 4, 4];

// let target = 11,
//   nums = [1, 1, 1, 1, 1, 1, 1, 1];

let result = findMinArraySubsizeSum(nums, target);
console.log('Result : ', result);

*/

/*
Time Complexity: O(n) 
Space Complexity: O(1) 
*/
