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
*/

// Here we need to remove the element which appear before #

function backSpaceCompare(str1, str2) {
  let result1 = [],
    result2 = [];

  for (const char of str1) {
    if (char === '#') {
      result1.length > 0 ? result1.pop() : result1;
    } else {
      result1.push(char);
    }
  }

  for (const char of str2) {
    if (char === '#') {
      result2.length > 0 ? result2.pop() : result2;
    } else {
      result2.push(char);
    }
  }

  console.log('Result 1 : ', result1.join(','));
  console.log('Result 2 : ', result2.join(','));

  return result1.join(',') === result2.join(',');
}

let s = 'ab#c';
let t = 'ad#c';

// let s = 'ab##';
// let t = 'c#d#';

// let s = 'a#c';
// let t = 'b';

let result = backSpaceCompare(t, s);
console.log('Result : ', result);
