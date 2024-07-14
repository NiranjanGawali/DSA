/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1
*/

/*
Approach 1
*/

/*
function findSingleNumber(arr) {
  let hasMap = new Map();

  for (const num of arr) {
    if (hasMap.has(num)) {
      hasMap.delete(num);
    } else {
      hasMap.set(num);
    }
  }

  let missingNumber = Array.from(hasMap)[0][0];

  return missingNumber;
}

let result = findSingleNumber([4, 1, 2, 1, 2]);
console.log('Result : ', result);
*/

// Time and space complexity Time Complexity of the above solution will be O(n)and space complexity will also be O(n).

/*
Approach 2: Using XOR
*/

function findSingleNumber(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    result ^= num;
  }
  return result;
}

let result = findSingleNumber([4, 1, 2, 1, 2]);
console.log('Result : ', result);

// Time complexity of this solution is O(n) as we iterate through all numbers of the input once.
// The algorithm runs in constant space O(1).
