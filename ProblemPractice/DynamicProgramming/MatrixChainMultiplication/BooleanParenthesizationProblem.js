/*

Given a boolean expression with the following symbols. 

Symbols
    'T' ---> true 
    'F' ---> false 
And following operators filled between symbols 

Operators
    &   ---> boolean AND
    |   ---> boolean OR
    ^   ---> boolean XOR 
Count the number of ways we can parenthesize the expression so that the value of expression evaluates to true. 
Let the input be in form of two arrays one contains the symbols (T and F) in order and the other contains operators (&, | and ^}

Examples: 

Input: symbol[]    = {T, F, T}
       operator[]  = {^, &}
Output: 2
The given expression is "T ^ F & T", it evaluates true
in two ways "((T ^ F) & T)" and "(T ^ (F & T))"

Input: symbol[]    = {T, F, F}
       operator[]  = {^, |}
Output: 2
The given expression is "T ^ F | F", it evaluates true
in two ways "( (T ^ F) | F )" and "( T ^ (F | F) )". 

Input: symbol[]    = {T, T, F, T}
       operator[]  = {|, &, ^}
Output: 4
The given expression is "T | T & F ^ T", it evaluates true
in 4 ways ((T|T)&(F^T)), (T|(T&(F^T))), (((T|T)&F)^T) 
and (T|((T&F)^T)). 


https://www.geeksforgeeks.org/boolean-parenthesization-problem-dp-37/

*/

function getBooleanExpressionCount(str, i, j, isTrue, memo = {}) {
  if (i > j) return 0;

  if (i === j) {
    return isTrue ? (str[i] === 'T' ? 1 : 0) : str[i] === 'F' ? 1 : 0;
  }

  let key = `${i}:${j}:${isTrue}`;

  if (key in memo) return memo[key];

  let ans = 0;

  for (let k = i + 1; k <= j - 1; k = k + 2) {
    let leftTrueKey = `${i}:${k - 1}:${true}`;
    let leftFalseKey = `${i}:${k - 1}:${false}`;
    let rightTrueKey = `${k + 1}:${j}:${true}`;
    let rightFalseKey = `${k + 1}:${j}:${false}`;

    let leftTrue, leftFalse, rightTrue, rightFalse;

    if (leftTrueKey in memo) {
      leftTrue = memo[leftTrueKey];
    } else {
      leftTrue = getBooleanExpressionCount(str, i, k - 1, true);
    }

    if (leftFalseKey in memo) {
      leftFalse = memo[leftFalseKey];
    } else {
      leftFalse = getBooleanExpressionCount(str, i, k - 1, false);
    }

    if (rightTrueKey in memo) {
      rightTrue = memo[rightTrueKey];
    } else {
      rightTrue = getBooleanExpressionCount(str, k + 1, j, true);
    }

    if (rightFalseKey in memo) {
      rightFalse = memo[rightFalseKey];
    } else {
      rightFalse = getBooleanExpressionCount(str, k + 1, j, false);
    }

    if (str[k] === '&') {
      if (isTrue) {
        ans += leftTrue * rightTrue;
      } else {
        ans +=
          leftFalse * rightFalse +
          leftFalse * rightTrue +
          leftTrue * rightFalse;
      }
    } else if (str[k] === '|') {
      if (isTrue) {
        ans +=
          leftTrue * rightTrue + leftTrue * rightFalse + leftFalse * rightTrue;
      } else {
        ans += leftFalse * rightFalse;
      }
    } else if (str[k] === '^') {
      if (isTrue) {
        ans += leftTrue * rightFalse + rightTrue * leftFalse;
      } else {
        ans += leftTrue * rightTrue + leftFalse * rightFalse;
      }
    }
  }

  memo[key] = ans;

  return ans;
}

// let str = 'T^F&T';
// let str = 'T^F|F';
let str = 'T|T&F^T';

let i = 0;
let j = str.length - 1;

let result = getBooleanExpressionCount(str, i, j, true);
console.log('Result : ', result);
