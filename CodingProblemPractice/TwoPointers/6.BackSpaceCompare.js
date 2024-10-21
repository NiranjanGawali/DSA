/*

Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Example 1:
Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".

Example 2:
Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".

Example 3:
Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".


https://www.geeksforgeeks.org/check-if-two-strings-after-processing-backspace-character-are-equal-or-not/

*/

// Method 1: Using Stack Approach

function returnBackspaceString(str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '#') {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }

  return stack.join('');
}

function main(s, t) {
  return returnBackspaceString(s) === returnBackspaceString(t);
}

let s = 'ab#c',
  t = 'ad#c';

let result = main(s, t);
console.log('Result : ', result);

/*
Time Complexity: O(n+m) - here n is length of strig 1 and m is length of string n
Space Complexity: O(n+m) - here n is length of strig 1 and m is length of string n
*/

// Method 2: Two pointers approach

// WILL NEED TO ADD IT
