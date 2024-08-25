/*

Given a string s, find the length of the longest 
substring without repeating characters.

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
 
Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.

https://leetcode.com/problems/longest-substring-without-repeating-characters/description/?envType=study-plan-v2&envId=top-interview-150

*/

function findLongestSubstringWithoutRepeat(str) {
  let start = 0,
    end = 0,
    map = {};
  let longestSubStringLen = Number.MIN_SAFE_INTEGER;

  while (end < str.length) {
    let endChar = str[end];
    map[endChar] = (0 | map[endChar]) + 1;

    if (Object.keys(map).length > end - start + 1) {
      let startChar = str[start];
      map[startChar] -= 1;
      if (map[startChar] === 0) {
        delete map[startChar];
      }
      start++;
    }

    if (Object.keys(map).length === end - start + 1) {
      longestSubStringLen = Math.max(longestSubStringLen, end - start + 1);
    }

    end++;
  }

  return longestSubStringLen === Number.MIN_SAFE_INTEGER
    ? 0
    : longestSubStringLen;
}

let s = 'abcabcbb';
let result = findLongestSubstringWithoutRepeat(s);
console.log('Result : ', result);

/*
Time Complexity: O(n) 
Space Complexity: O(1) 
*/
