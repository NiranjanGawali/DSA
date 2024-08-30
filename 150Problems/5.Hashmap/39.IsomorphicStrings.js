/*

Given two strings s and t, determine if they are isomorphic.
Two strings s and t are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 
Example 1:
Input: s = "egg", t = "add"
Output: true

Explanation:
The strings s and t can be made identical by:
Mapping 'e' to 'a'.
Mapping 'g' to 'd'.

Example 2:
Input: s = "foo", t = "bar"
Output: false
Explanation:
The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

Example 3:
Input: s = "paper", t = "title"
Output: true


Constraints:
1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.

https://leetcode.com/problems/isomorphic-strings/description/?envType=study-plan-v2&envId=top-interview-150

*/

function isIsomorphic(s, t) {
  if (s.length !== t.length) return fasle;

  let sMap = {};
  let tMap = {};

  for (let i = 0; i < s.length; i++) {
    let sChar = s[i];
    let tChar = t[i];

    // Check if the mapping from s to t is consistent
    if (sMap[sChar] == undefined) {
      sMap[sChar] = tChar;
    } else if (sMap[sChar] !== tChar) {
      return false;
    }

    // Check if the mapping from t to s is consistent
    if (tMap[tChar] == undefined) {
      tMap[tChar] = sChar;
    } else if (tMap[tChar] !== sChar) {
      return false;
    }
  }

  return true;
}

// let s = 'egg',
//   t = 'add';

// let s = 'foo',
//   t = 'bar';

let s = 'paper',
  t = 'title';

let result = isIsomorphic(s, t);
console.log('Is string isomorphic : ', result);

/*

Summary:
Time Complexity: O(n)
Space Complexity: O(n)

*/
