/* 
 Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 You may assume that each input would have exactly one solution, and you may not use the same element twice.
 
 You can return the answer in any order.
 
  Example 1:
 Input: nums = [2,7,11,15], target = 9
 Output: [0,1]
 Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 
 Example 2:
 Input: nums = [3,2,4], target = 6
 Output: [1,2]
 
 Example 3:
 Input: nums = [3,3], target = 6
 Output: [0,1]
 
 */

/**************************************/
/************* BRUTE FORCE SOLUTION *****************/
/**************************************/

// function pairWithTargetSumBruteForce(numsArr, target) {
//   let outputArr = [];
//   for (let i = 0; i < numsArr.length; i++) {
//     for (let j = 1; i < numsArr.length; i++) {
//       if (numsArr[i] + numsArr[j] === target) {
//         outputArr.push(numsArr[i], numsArr[j]);
//       }
//     }
//   }
//   return outputArr;
// }

// let input1 = [2, 7, 11, 15],
//   target1 = 9;
// let result1 = pairWithTargetSumBruteForce(input1, target1);
// console.log(result1);

// Time complexity is O(N)2

/**************************************/
/************* TWO POINTER SOLUTION *****************/
/**************************************/

function pairWithTargetSum(numsArr, target) {
  let start = 0,
    end = numsArr.length - 1;

  while (start < end) {
    let sum = numsArr[start] + numsArr[end];

    if (sum === target) return [numsArr[start], numsArr[end]];

    if (sum < target) start++;
    else end--;
  }
  return 0;
}

let input2 = [2, 7, 11, 15],
  target2 = 9;
let result2 = pairWithTargetSum(input2, target2);
console.log(result2);

// The time complexity of the above algorithm will be O(N), where N is the total number of elements in the given array.
// The algorithm runs in constant space O(1).

/**************************************/
/************* HASH TABLE SOLUTION ******************/
/**************************************/

// function pairWithTargetSum(numsArr, target) {
//   const arr = {};

//   for (let i = 0; i < numsArr.length; i++) {
//     const element = numsArr[i];
//     if (target - element in arr) {
//       return [target - element, element];
//     }
//     arr[element] = i;
//   }
//   return [-1, -1];
// }

// let input3 = [2, 7, 11, 15],
//   target3 = 9;
// let result3 = pairWithTargetSum(input3, target3);
// console.log(result3);

// The time complexity of the above algorithm will be O(N), where N is the total number of elements in the given array.
// The space complexity will also be O(N), as, in the worst case, we will be pushing N numbers in the HashTable.
