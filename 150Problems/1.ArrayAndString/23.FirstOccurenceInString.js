/*

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Example 2:
Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.

*/

// Method 1
/*
function isNeedleExists(haystack, needle) {
  if (needle.length == 0) return 0;
  let index = haystack.indexOf(needle);
  return index;
}

// let haystack = 'sadbutsad',
//   needle = 'sad';

let haystack = 'leetcode',
  needle = 'leeto';

let result = isNeedleExists(haystack, needle);
console.log('Result : ', result);
*/

// Method 2

function isNeedleExists(haystack, needle) {
  let m = haystack.length;
  let n = needle.length;

  if (n == 0) return 0;

  let start = 0;
  let end = 0;

  while (end < m) {
    if (end - start + 1 === n) {
      let substr = haystack.substring(start, end + 1);
      if (substr === needle) return start;

      start++;
    }
    end++;
  }
  return -1;
}

let haystack = 'sadbutsad',
  needle = 'sad';

// let haystack = 'leetcode',
//   needle = 'leeto';

let result = isNeedleExists(haystack, needle);
console.log('Result : ', result);

/*
Time complexity : O(n * m)
Space complexity: O(1)
*/

// Apart from above mentioned methos most efficient way to achieve the result is Knuth-Morris-Pratt (KMP) algorithm, please explore it in future.
