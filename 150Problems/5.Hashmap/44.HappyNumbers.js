/*

Write an algorithm to determine if a number n is happy.
A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

Example 1:
Input: n = 19
Output: true

Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

Example 2:
Input: n = 2
Output: false
 

Constraints:
1 <= n <= 231 - 1


https://leetcode.com/problems/happy-number/description/?envType=study-plan-v2&envId=top-interview-150

*/

function sumOfSquares(num) {
  let sum = 0;

  while (num > 0) {
    let digit = num % 10;
    sum += Math.pow(digit, 2);
    num = Math.floor(num / 10);
  }

  return sum;
}

function isHappyNumber(num) {
  let map = new Map();

  // Usually if a number is cyclic i.e 88, then we will never reach 1,  so we need to handle it
  while (num !== 1 && !map.has(num)) {
    map.set(num, true);
    num = sumOfSquares(num);
  }

  return num === 1;
}

// let n = 19;
let n = 2;
let result = isHappyNumber(n);

console.log('Is this number happy : ', result);

/*

Time Complexity: O((log n)^2)
Space Complexity: O(log n)

*/
