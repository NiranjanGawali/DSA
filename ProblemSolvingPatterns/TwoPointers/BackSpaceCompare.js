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

/******************************************************************************************************************/
/******************************************** Using Stack *********************************************************
/******************************************************************************************************************/

function backSpaceCompare(input1, input2) {
  let result1 = [],
    result2 = [];

  for (const char1 of input1) {
    if (char1 === '#') {
      if (result1.length !== 0) result1.pop();
    } else {
      result1.push(char1);
    }
  }

  for (const char2 of input2) {
    if (char2 === '#') {
      if (result2.length !== 0) result2.pop();
    } else {
      result2.push(char2);
    }
  }

  let result = result1.join(',') === result2.join(',') ? true : false;
  return result;
}

let s = 'ab#c',
  t = 'ad#c';
let result = backSpaceCompare(s, t);
console.log('Result : ', result);

/******************************************************************************************************************/
/******************************************** Two Pointers *********************************************************
/******************************************************************************************************************/

/*
function backSpaceCompare(s, t) {
  let i = s.length - 1;
  let j = t.length - 1;

  while (i >= 0 || j >= 0) {
    let skipS = 0;
    let skipT = 0;

    // Find the position of the next valid character in s
    while (i >= 0) {
      if (s[i] === '#') {
        skipS++;
        i--;
      } else if (skipS > 0) {
        skipS--;
        i--;
      } else {
        break;
      }
    }

    // Find the position of the next valid character in t
    while (j >= 0) {
      if (t[j] === '#') {
        skipT++;
        j--;
      } else if (skipT > 0) {
        skipT--;
        j--;
      } else {
        break;
      }
    }

    // Compare the characters
    if (i >= 0 && j >= 0 && s[i] !== t[j]) {
      return false;
    }

    // If one is valid and the other is not
    if (i >= 0 !== j >= 0) {
      return false;
    }

    i--;
    j--;
  }

  return true;
}

// Test cases
console.log(backspaceCompare('ab#c', 'ad#c')); // Output: true
console.log(backspaceCompare('ab##', 'c#d#')); // Output: true
console.log(backspaceCompare('a#c', 'b')); // Output: false
*/
