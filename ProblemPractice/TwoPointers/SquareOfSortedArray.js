/*
 Given an integer array nums sorted in non - decreasing order, return an array of the squares of each number sorted in non - decreasing order.
 
 Example 1:
 Input: nums = [-4,-1,0,3,10]
 Output: [0,1,9,16,100]
 Explanation: After squaring, the array becomes [16,1,0,9,100].
 After sorting, it becomes [0,1,9,16,100].
 
 Example 2:
 Input: nums = [-7,-3,2,3,11]
 Output: [4,9,9,49,121]
 
 */

// Solution via method 1
/*
function sortedSquares(nums) {
  let result = [];
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let leftSquare = nums[left] ** 2;
    let rightSquare = nums[right] ** 2;

    if (leftSquare > rightSquare) {
      result.push(leftSquare);
      left++;
    } else {
      result.push(rightSquare);
      right--;
    }
  }
  return result.reverse();
}

let input = [-4, -1, 0, 3, 10];
let result = sortedSquares(input);
console.log('Result : ', result);
*/

// Solution via method 2

function sortedSquares(nums) {
  let result = new Array(nums.length);
  let left = 0;
  let right = nums.length - 1;
  let index = nums.length - 1;

  while (left <= right) {
    let leftSquare = nums[left] ** 2;
    let rightSquare = nums[right] ** 2;

    if (leftSquare > rightSquare) {
      result[index] = leftSquare;
      left++;
    } else {
      result[index] = rightSquare;
      right--;
    }

    // This is the one way of handling the if case, alternate way is mentioned below
    /*

    if (leftSquare < rightSquare) {
      result[index] = rightSquare;
      right--;
    } else {
      result[index] = leftSquare;
      left++;
    }
      */

    index--;
  }
  return result;
}

let input = [-4, -1, 0, 3, 10];
let result = sortedSquares(input);
console.log('Result : ', result);
