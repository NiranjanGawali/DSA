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

function findParenthesis(open, close, output, result) {
  if (open === 0 && close === 0) {
    result.push(output);
    return;
  }

  if (open > 0) {
    let output1 = output + '(';
    findParenthesis(open - 1, close, output1, result);
  }

  if (close > open) {
    let output2 = output + ')';
    findParenthesis(open, close - 1, output2, result);
  }
}

function main(input) {
  let open = input;
  let close = input;
  let output = '';
  let result = [];
  findParenthesis(open, close, output, result);
  return result;
}

let input = 3;
let finalOutput = main(input);
console.log('OUTPUT : ', finalOutput);

/*

Time Complexity: O(4^n sqrt{n})
Space Complexity: O(n * 4^n sqrt{n})

*/
