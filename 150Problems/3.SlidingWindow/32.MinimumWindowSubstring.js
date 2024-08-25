/*

Given two strings s and t of lengths m and n respectively, return the minimum window 
substring
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

function findMinimumWindowSubstring(inputStr, targetWindow) {
  let start = 0,
    end = 0;

  let minWindowStart = 0;
  let map = {};
  count = 0;
  let minLength = Number.MAX_SAFE_INTEGER;

  // Add the window string data to the map
  for (const key of targetWindow) {
    map[key] = (0 | map[key]) + 1;
  }

  count = Object.keys(map).length; // find count of object keys, it will be zero when all the values in the values in the map will be zero

  while (end < inputStr.length) {
    // When mathching element is found we are reducing the count in the map
    let endChar = inputStr.charAt(end);
    if (endChar in map) {
      map[endChar] -= 1;
      if (map[endChar] === 0) {
        count--;
      }
    }

    while (count === 0) {
      // we are calculating the minimun length and start of minimun length
      if (minLength > end - start + 1) {
        minLength = end - start + 1;
        minWindowStart = start;
      }

      // Handing the start char, add it in the map as window slide and incrase the count in the map if element occurence is more than zero
      let startChar = inputStr.charAt(start);
      if (startChar in map) {
        map[startChar] += 1;
        if (map[startChar] > 0) {
          count++;
        }
      }

      start++;
    }
    end++;
  }

  return minLength === Number.MAX_SAFE_INTEGER
    ? ''
    : inputStr.substr(minWindowStart, minLength);
}

let s = 'ADOBECODEBANC',
  t = 'ABC';

// let s = 'a',
//   t = 'a';

// let s = 'a',
//   t = 'aa';

let result = findMinimumWindowSubstring(s, t);
console.log('Result : ', result);

/*
Time Complexity: O(N), where N is the length of `inputStr`.
Space Complexity: O(T), where T is the length of `targetWindow`.
*/
