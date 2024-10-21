/*

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 
Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

https://leetcode.com/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=top-interview-150

*/

function productOfArrayExceptSeft(nums) {
  let n = nums.length;
  let result = new Array(n).fill(1);

  console.log('1.');
  console.log(result);

  let prefix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  console.log('2.');
  console.log(result);

  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  console.log('3.');
  console.log(result);
}

let nums = [1, 2, 3, 4];

productOfArrayExceptSeft(nums);

console.log('Result : ', nums);

/*

Time Complexity: O(n) because we traverse the array twice.
Space Complexity: O(1) extra space (not counting the output array) since no additional data structures proportional to input size are used.

*/
