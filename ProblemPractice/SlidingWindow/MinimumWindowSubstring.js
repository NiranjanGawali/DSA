/*
Given two strings s and t of lengths m and n respectively, return the minimum window substring
of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

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

https://leetcode.com/problems/minimum-window-substring/description/?envType=study-plan-v2&envId=top-interview-150
*/

function findMinimumWindowSubstring(inputString, windowString) {
  let end = 0;
  let start = 0;
  let windowMap = {};
  let count = 0;
  let minLength = Number.MAX_SAFE_INTEGER;
  let minWindowStart = 0;

  // Add the window string data to the map
  for (const windowWord of windowString) {
    windowMap[windowWord] = (windowMap[windowMap] || 0) + 1;
  }

  count = Object.keys(windowMap).length; // find count of object keys, it will be zero when all the values in the values in the map will be zero

  while (end < inputString.length) {
    // When mathching element is found we are reducing the count in the map
    let endChar = inputString.charAt(end);
    if (endChar in windowMap) {
      windowMap[endChar] -= 1;
      if (windowMap[endChar] == 0) {
        count--;
      }
    }

    // When count zero is found
    while (count === 0) {
      // we are calculating the minimun length and start of minimun length
      if (end - start + 1 < minLength) {
        minLength = end - start + 1;
        minWindowStart = start;
      }

      // Handing the start char, add it in the map as window slide and incrase the count in the map if element occurence is more than zero
      let startChar = inputString.charAt(start);
      if (startChar in windowMap) {
        windowMap[startChar] += 1;

        if (windowMap[startChar] > 0) {
          count++;
        }
      }

      start++;
    }

    end++;
  }
  if (minLength === Number.MAX_SAFE_INTEGER) {
    return '';
  } else {
    return inputString.substr(minWindowStart, minLength);
  }
}

let inputString = 'ADOBECODEBANC';
let windowString = 'ABC';
let result = findMinimumWindowSubstring(inputString, windowString);

console.log('RESULT : ', result); // BANC
