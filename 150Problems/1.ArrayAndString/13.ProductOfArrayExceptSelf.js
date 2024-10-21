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
 

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

https://leetcode.com/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=top-interview-150

*/

function productExceptSelf(nums) {
  let n = nums.length;
  let output = new Array(n).fill(1);

  console.log('1.', output);

  // First pass: calculate prefix products
  for (let i = 1; i < nums.length; i++) {
    output[i] = output[i - 1] * nums[i - 1];
  }

  console.log('2.', output);

  // Second pass: calculate suffix products and multiply with prefix products
  let suffixProduct = 1; // Initialize suffix product
  for (let i = n - 1; i >= 0; i--) {
    output[i] *= suffixProduct; // Multiply with the current suffix product
    suffixProduct *= nums[i]; // Update the suffix product
  }

  console.log('3.', output);

  return output;
}

console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
// console.log(productExceptSelf([-1, 1, 0, -3, 3])); // Output: [0, 0, 9, 0, 0]

/*

Time Complexity: O(n) because we traverse the array twice.
Space Complexity: O(1) extra space (not counting the output array) since no additional data structures proportional to input size are used.

*/
