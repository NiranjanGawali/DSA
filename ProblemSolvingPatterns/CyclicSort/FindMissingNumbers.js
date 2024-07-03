/*
 
 Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] 
 that do not appear in nums.
 
 Example 1:
 Input: nums = [4,3,2,7,8,2,3,1]
 Output: [5,6]
 
 Example 2:
 Input: nums = [1,1]
 Output: [2]
 
 */

function findMissingNumbers(nums) {
  let n = nums.length;
  let i = 0;

  while (i < n) {
    let j = nums[i] - 1;
    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i++;
    }
  }

  let missingNumbers = [];
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      missingNumbers.push(i + 1);
    }
  }
  return missingNumbers;
}

// let result = findMissingNumbers([2, 3, 1, 8, 2, 3, 5, 1]); //[4, 6, 7], The array should have all numbers from 1 to 8, due to duplicates 4, 6, and 7 are missing.
let result = findMissingNumbers([2, 4, 1, 2]); //3
console.log('Result : ', result);
