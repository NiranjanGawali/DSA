/*

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([])"
Output: true

 
Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.


https://leetcode.com/problems/valid-parentheses/description/?envType=study-plan-v2&envId=top-interview-150

*/

// Stack follows LIFO

function isValidParenthesis(str) {
  let stack = [];

  let parenthesesMap = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (['(', '{', '['].includes(char)) {
      stack.push(char);
    } else {
      let poppedElt = stack.pop();
      if (poppedElt !== parenthesesMap[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// let s = '((()))';
// let s = '()[]{}';
// let s = '(]';
let s = '([])';

let result = isValidParenthesis(s);
console.log('Is Parenthesis Valid : ', result);

/*

Time Complexity: O(n) 
Space Complexity: O(n) 

*/
