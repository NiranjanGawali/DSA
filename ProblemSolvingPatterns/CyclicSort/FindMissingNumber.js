/*
 Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing 
 from the array.
 
 Example 1:
 Input: nums = [3,0,1]
 Output: 2
 Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range 
 since it does not appear in nums.
 
 Example 2:
 Input: nums = [0,1]
 Output: 2
 Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range 
 since it does not appear in nums.
 
 Example 3:
 Input: nums = [9,6,4,2,3,5,7,0,1]
 Output: 8
 Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range 
 since it does not appear in nums.
 */

/**********************************/
/************ Cyclic Sort Problem ***************/
/**********************************/

/*
 function findMissingNumber(nums) {
   console.log('Nums: ');
   console.log(nums);
   let i = 0,
     n = nums.length;
 
   // Sort the array
   while (i < n) {
     let j = nums[i];
     if (nums[i] < n && nums[i] !== nums[j]) {
       [nums[i], nums[j]] = [nums[j], nums[i]];
     } else {
       i++;
     }
   }
 
   for (let i = 0; i < nums.length; i++) {
     if (nums[i] !== i) {
       return i;
     }
   }
 
   return n;
 }
 
 // let result1 = findMissingNumber([4, 0, 3, 1]); //2
 
 // let result1 = findMissingNumber([8, 3, 5, 2, 4, 6, 0, 1]); //7
 console.log('Result : ', result1);
 */

/**********************************/
/************ Using mathematical formula **************/
/**********************************/

function findMissingNumber(nums) {
  let n = nums.length;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = nums.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return expectedSum - actualSum;
}

// let result2 = findMissingNumber([4, 0, 3, 1]); //2

let result2 = findMissingNumber([0, 2, 6, 7, 8, 3, 4, 1]);

console.log('Result : ', result2);
