// Given an integer A pairs of parentheses, write a function to generate all combinations of well-formed parentheses of length 2*A.

/**
Example Input

Input 1:
A = 3

Input 2:
A = 1

Example Output

Output 1:
[ "((()))", "(()())", "(())()", "()(())", "()()()" ]

Output 2:
[ "()" ]
 
 */

function findParenthesis(open, close, output, results) {
  if (open === 0 && close === 0) {
    results.push(output);
    return;
  }

  if (open > 0) {
    let output1 = output + '(';
    findParenthesis(open - 1, close, output1, results);
  }

  if (close > open) {
    let output2 = output + ')';
    findParenthesis(open, close - 1, output2, results);
  }
}

function main(input) {
  let open = input;
  let close = input;
  let output = '';
  let results = [];

  findParenthesis(open, close, output, results);
  return results;
}

let input = 3;
let finalOutput = main(input);
console.log('OUTPUT : ', finalOutput);
