/*

Given two strings s and t of lengths m and n respectively, return the minimum window 
substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

 
Example 1:
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

Example 2:
Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.

Example 3:
Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.

Constraints:
m == s.length
n == t.length
1 <= m, n <= 105
s and t consist of uppercase and lowercase English letters.
 

Follow up: Could you find an algorithm that runs in O(m + n) time?


https://leetcode.com/problems/minimum-window-substring/description/

*/

function findMinimumWindowSubstring(s, t) {
  let start = 0;
  let end = 0;
  let strMap = {};
  let minLen = Number.MAX_SAFE_INTEGER;
  let windowStartIndex = 0;

  for (const elt of t) {
    strMap[elt] = (strMap[elt] || 0) + 1;
  }

  let count = Object.keys(strMap).length;

  while (end < s.length) {
    let endChar = s[end];

    if (endChar in strMap) {
      strMap[endChar]--;
      if (strMap[endChar] === 0) {
        count--;
      }
    }

    while (count === 0) {
      if (end - start + 1 < minLen) {
        minLen = end - start + 1;
        windowStartIndex = start;
      }

      let startChar = s[start];
      if (startChar in strMap) {
        strMap[startChar]++;
        if (strMap[startChar] > 0) {
          count++;
        }
      }

      start++;
    }

    end++;
  }

  if (minLen === Number.MAX_SAFE_INTEGER) {
    return '';
  } else {
    return s.substr(windowStartIndex, minLen);
  }
}

let s = 'ADOBECODEBANC',
  t = 'ABC';

let result = findMinimumWindowSubstring(s, t);
console.log('Minimum window substring is : ', result);

/*
Time Complexity: O(n), where n is the length of the string.
Space Complexity: O(k), where k is the number of unique characters in the string (in the worst case, O(n)).
*/
