/*

You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

Note that:
The valid operators are '+', '-', '*', and '/'.
Each operand may be an integer or another expression.
The division between two integers always truncates toward zero.
There will not be any division by zero.
The input represents a valid arithmetic expression in a reverse polish notation.
The answer and all the intermediate calculations can be represented in a 32-bit integer.
 

Example 1:
Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9

Example 2:
Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6

Example 3:
Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
 

Constraints:
1 <= tokens.length <= 104
tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].


https://leetcode.com/problems/evaluate-reverse-polish-notation/description/?envType=study-plan-v2&envId=top-interview-150

*/

function evalRPN(tokens) {
  let stack = [];

  for (let token of tokens) {
    if (!isNaN(token)) {
      // If the token is a number, push it to the stack
      stack.push(Number(token));
    } else {
      // Token is an operator, pop two elements from stack
      let num2 = stack.pop(); // num1 should be bigger and second selement to be popped is bigger
      let num1 = stack.pop();
      switch (token) {
        case '+':
          stack.push(num1 + num2);
          break;

        case '-':
          stack.push(num1 - num2);
          break;

        case '*':
          stack.push(num1 * num2);
          break;

        case '/':
          // In JS, we use Math.trunc to truncate toward zero
          stack.push(Math.trunc(num1 / num2));
          break;
      }
    }
  }

  // The final result will be the only element left in the stack
  return stack.pop();
}

let tokens = ['2', '1', '+', '3', '*'];
// let tokens = ['4', '13', '5', '/', '+'];
// let tokens = [
//   '10',
//   '6',
//   '9',
//   '3',
//   '+',
//   '-11',
//   '*',
//   '/',
//   '*',
//   '17',
//   '+',
//   '5',
//   '+',
// ];

let result = evalRPN(tokens);
console.log('Result : ', result);

/*
Time Complexity: O(n) 
Space Complexity: O(n) 
*/
