/*
Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 
*/

function lengthOfLongestSubstring(str) {
  let map = {};
  let maxLen = 0;
  let start = 0;

  for (let end = 0; end < str.length; end++) {
    const char = str.charAt(end);
    if (char in map) {
      start = Math.max(start, map[char] + 1);
    }
    map[char] = end;
    maxLen = Math.max(maxLen, end - start + 1);
  }
  return maxLen;
}

let input = 'abcabcbb';
// let input = 'bbbbb';
// let input = 'pwwkew';

let result = lengthOfLongestSubstring(input);
console.log('Result : ', result);
