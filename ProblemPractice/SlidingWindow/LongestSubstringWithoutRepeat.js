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
  let start = 0;
  let end = 0;
  let longestSubString = Number.MIN_SAFE_INTEGER;
  let strMap = {};

  while (end < str.length) {
    let endChar = str.charAt(end);
    strMap[endChar] += 1;

    while (Object.keys(strMap).length > end - start + 1) {
      let startChar = str.charAt(start);
      str[startChar] -= 1;
      if (str[startChar] === 0) {
        delete str[startChar];
      }
      start++;
    }

    if (Object.keys(strMap).length === end - start + 1) {
      longestSubString = Math.max(longestSubString, end - start + 1);
    }

    end++;
  }
  return longestSubString;
}

let input = 'abcabcbb';
// let input = 'bbbbb';
// let input = 'pwwkew';

let result = lengthOfLongestSubstring(input);
console.log('Result : ', result);
