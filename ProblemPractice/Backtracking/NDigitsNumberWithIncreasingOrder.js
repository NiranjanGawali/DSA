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

function findNDigits(n, start, path, results) {
  if (path.length === n) {
    results.push(path.join(''));
    return;
  }
  for (let i = start; i < 10; i++) {
    path.push(i);
    findNDigits(n, i + 1, path, results);
    path.pop();
  }
}

function main(n) {
  let results = [];
  if (n == 1) {
    for (let i = 0; i < 10; i++) {
      results.push(i);
    }
  } else {
    findNDigits(n, 1, [], results);
  }
  return results;
}

let input = 2;

let output = main(input);
console.log('Output : ', output);

// Time comlpexity of code  0(n * (10 / n))
