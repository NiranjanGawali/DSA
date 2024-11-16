/*
Given an integer n, print all the n digit numbers in increasing order, such that their digits are in strictly increasing order(from left to right).

Example 1:
Input:
n = 1
Output:
0 1 2 3 4 5 6 7 8 9
Explanation:
Single digit numbers are considered to be 
strictly increasing order.

Example 2:
Input:
n = 2
Output:
12 13 14 15 16 17 18 19 23....79 89
Explanation:
For n = 2, the correct sequence is
12 13 14 15 16 17 18 19 23 and so on 
up to 89.

*/

function findNDigits(n, start, path, result) {
  if (n == path.length) {
    result.push(path.join(''));
    return;
  }

  for (let i = start; i < 10; i++) {
    path.push(i);
    findNDigits(n, i + 1, path, result);
    path.pop();
  }
}

function main(input) {
  let result = [];
  if (input === 1) {
    for (let i = 0; i < 10; i++) {
      result.push(i);
    }
  } else {
    findNDigits(input, 1, [], result);
  }

  return result;
}

let input = 2;

let output = main(input);
console.log('Output : ', output);

// Time complexity - 0(9^n)  As for each step we are calling 9 operations.
