/*

Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
Example 3:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 

Constraints:

1 <= s.length <= 104
s contains English letters (upper-case and lower-case), digits, and spaces ' '.
There is at least one word in s.
 
https://leetcode.com/problems/reverse-words-in-a-string/description/?envType=study-plan-v2&envId=top-interview-150
*/
/*
function reverseTheWordInString(str) {
  let n = str.length;
  let result = '';
  let temp = '';

  for (let i = n - 1; i >= 0; i--) {
    let char = str[i];
    if (char !== ' ') {
      temp = char + temp; // Build the word in reverse
    } else if (temp.length > 0) {
      result += temp + ' '; // Add the word followed by a space
      temp = ''; // Reset temp for the next word
    }
  }

  // Add the last word after the loop ends
  if (temp.length > 0) result += temp;

  // Trim any trailing space and return
  return result.trim();
}

let str = 'the sky is blue';
// let str = '  hello world  ';
let result = reverseTheWordInString(str);
console.log('Reverse String is : ', result);
*/
/*
Time Complexity: O(N)
Space Complexity: O(N)
*/

// Another method

function reverseTheWordInString(str) {
  // Convert the string to an array of characters for in-place manipulation
  let chars = Array.from(str);

  // Helper function to reverse a section of the array in-place
  function reverse(chars, start, end) {
    // Swap the characters from the start and end until they meet in the middle
    while (start < end) {
      [chars[start], chars[end]] = [chars[end], chars[start]];
      start++;
      end--;
    }
  }

  // Step 1: Reverse the entire array
  // This reverses the order of all characters, including words and spaces
  reverse(chars, 0, chars.length - 1);

  // Step 2: Reverse each word in the reversed array
  let start = 0;
  for (let end = 0; end <= chars.length; end++) {
    // If we reach the end of a word (either a space or end of the array)
    if (end === chars.length || chars[end] === ' ') {
      // Reverse the word to correct its character order
      reverse(chars, start, end - 1);
      // Move start to the beginning of the next word
      start = end + 1;
    }
  }

  // Step 3: Join the characters into a string and trim any extra spaces
  // This handles leading/trailing spaces and ensures only single spaces between words
  return chars.join('').trim();
}

let str = 'the sky is blue';
// Example input with extra spaces: '  hello world  '
// It will output: 'world hello'
let result = reverseTheWordInString(str);
console.log('Reversed String is : ', result);

/*
Time Complexity: O(N)
Space Complexity: O(N)
*/
