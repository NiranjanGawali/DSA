/*

Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring consisting of non-space characters only.

Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3:
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
 
Constraints:
1 <= s.length <= 104
s consists of only English letters and spaces ' '.
There will be at least one word in s.

https://leetcode.com/problems/length-of-last-word/description/?envType=study-plan-v2&envId=top-interview-150

*/

function lengthOfLastWord(str) {
  let count = 0;
  let isLastWordCounted = false;
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
    if (str[i] !== ' ') {
      count++;
      isLastWordCounted = true;
    } else if (isLastWordCounted) {
      break;
    }
  }

  return count;
}

let s = 'Hello World';
// let s = '   fly me   to   the moon  ';

let result = lengthOfLastWord(s);

console.log('Length of last word : ', result);

/*
Time Complexity: O(n)
Space Complexity: O(1)
*/
