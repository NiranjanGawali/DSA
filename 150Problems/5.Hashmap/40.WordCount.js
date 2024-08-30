/*

Given a pattern and a string s, find if s follows the same pattern.
Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:
Each letter in pattern maps to exactly one unique word in s.
Each unique word in s maps to exactly one letter in pattern.
No two letters map to the same word, and no two words map to the same letter.
 

Example 1:
Input: pattern = "abba", s = "dog cat cat dog"
Output: true

Explanation:
The bijection can be established as:
'a' maps to "dog".
'b' maps to "cat".

Example 2:
Input: pattern = "abba", s = "dog cat cat fish"
Output: false

Example 3:
Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false

 
Constraints:
1 <= pattern.length <= 300
pattern contains only lower-case English letters.
1 <= s.length <= 3000
s contains only lowercase English letters and spaces ' '.
s does not contain any leading or trailing spaces.
All the words in s are separated by a single space.


https://leetcode.com/problems/word-pattern/description/?envType=study-plan-v2&envId=top-interview-150

*/

function isWordCountPresent(pattern, word) {
  let wordArr = word.split(' ');

  if (pattern.length !== wordArr.length) return false;

  let pMap = {};
  let wMap = {};

  for (let i = 0; i < wordArr.length; i++) {
    let pChar = pattern[i];
    let wChar = wordArr[i];

    if (pMap[pChar] == undefined) {
      pMap[pChar] = wChar;
    } else if (pMap[pChar] !== wChar) {
      return false;
    }

    if (wMap[wChar] == undefined) {
      wMap[wChar] = pChar;
    } else if (wMap[wChar] !== pChar) {
      return false;
    }
  }

  return true;
}

// let pattern = 'abba',
//   s = 'dog cat cat dog';

// let pattern = 'abba',
//   s = 'dog cat cat fish';

let pattern = 'aaaa',
  s = 'dog cat cat dog';

let result = isWordCountPresent(pattern, s);

console.log('Result : ', result);

/*

Summary:
Time Complexity: O(n)
Space Complexity: O(n)

*/
