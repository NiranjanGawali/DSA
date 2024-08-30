/*

Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
 
Constraints:
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 
Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

https://leetcode.com/problems/valid-anagram/description/?envType=study-plan-v2&envId=top-interview-150

*/

function isValidAnagram(s, t) {
  if (s.length !== t.length) return false;

  let map = {};

  for (let i = 0; i < s.length; i++) {
    let sChar = s[i];
    map[sChar] = (map[sChar] | 0) + 1;
  }

  for (const tChar of t) {
    if (!map[tChar]) return false;
    map[tChar]--;
  }

  return true;
}

// let s = 'anagram',
//   t = 'nagaram';

let s = 'rat',
  t = 'car';

let result = isValidAnagram(s, t);

console.log('Is Given strings are anagram : ', result);

/*

Summary:
Time Complexity: O(n)
Space Complexity: O(1) (or O(k) if considering a more general character set)

*/

/*

Space Complexity:
Space for the Frequency Map (map):

The space required to store the frequency map depends on the number of unique characters in s (and t).
If s and t consist of only lowercase English letters, the maximum number of unique characters is 26.
Thus, the space complexity is constant, i.e., O(1) for the English alphabet.
However, if the strings can consist of any characters from a larger character set (like all ASCII characters), the space complexity would be O(k), where k is the number of unique characters in the input strings.

*/
