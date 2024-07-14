/**
 Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:
Input: nums = [0,1]
Output: [[0,1],[1,0]]

Example 3:
Input: nums = [1]
Output: [[1]]
 */

function permute(nums) {
  let results = [];
  backtrack(results, [], nums);
  return results;
}

function backtrack(results, temp, nums) {
  if (temp.length === nums.length) {
    return results.push([...temp]);
  }

  for (let num of nums) {
    if (temp.includes(num)) {
      continue;
    }

    temp.push(num);
    backtrack(results, temp, nums);
    temp.pop();
  }
}

let result = permute([1, 2, 3]);
console.log('Result : ', result);

/***
 * Time complexity - O(n x n!)
 * Space complexity =  O(n x n!)
 */
