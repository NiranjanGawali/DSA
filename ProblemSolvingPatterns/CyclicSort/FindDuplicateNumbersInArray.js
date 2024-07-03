/*
 Given an array of integers nums containing n + 1 integers where each integer is in the range[1, n] inclusive.
 There is only one repeated number in nums, return this repeated number.
 You must solve the problem without modifying the array nums and uses only constant extra space.
 
  
 Example 1:
 Input: nums = [1,3,4,2,2]
 Output: 2
 
 Example 2:
 Input: nums = [3,1,3,4,2]
 Output: 3
 
 Example 3:
 Input: nums = [3,3,3,3,3]
 Output: 3
 */

function findDuplicateNumberInArray(nums) {
  let i = 0;
  let n = nums.length;

  while (i < n) {
    let j = nums[i] - 1;
    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i++;
    }
  }

  let duplicateArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      duplicateArr.push(nums[i]);
    }
  }

  return duplicateArr;
}

let result = findDuplicateNumberInArray([1, 4, 3, 3, 2]); //4
console.log('Result : ', result);
