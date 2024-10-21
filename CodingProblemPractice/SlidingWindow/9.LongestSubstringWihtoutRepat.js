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

https://leetcode.com/problems/longest-substring-without-repeating-characters/description/?envType=study-plan-v2&envId=top-interview-150
 
*/

function findLongestSubstringWithoutRepeat(str) {
  let start = 0; // Start pointer for the sliding window
  let end = 0; // End pointer for the sliding window
  let longestSubString = 0; // To store the maximum length found
  let strMap = {}; // Map to track the count of characters in the current window

  while (end < str.length) {
    let endChar = str[end];
    // Increment the count of the current end character in the map
    strMap[endChar] = (strMap[endChar] || 0) + 1;

    // While the number of unique characters exceeds the length of the current window
    while (Object.keys(strMap) > end - start + 1) {
      let startChar = str[start];
      if (startChar in strMap) {
        str[startChar]--;
        if (str[startChar] === 0) {
          delete str[startChar];
        }
      }
      start++;
    }

    // Decrease the count of the start character in the map
    if (Object.keys(strMap).length === end - start + 1) {
      longestSubString = Math.max(longestSubString, end - start + 1);
    }

    end++;
  }

  return longestSubString;
}

let s = 'abcabcbb';
// let s = 'bbbbb';

let result = findLongestSubstringWithoutRepeat(s);
console.log('Result : ', result);
