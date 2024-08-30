/*

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
Each letter in magazine can only be used once in ransomNote.

Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:
1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.

https://leetcode.com/problems/ransom-note/description/?envType=study-plan-v2&envId=top-interview-150
*/
// Mehtod 1

function canConstruct(ransomNote, magazine) {
  // Create an array to store the frequency of each letter in magazine
  let freq = Array(26).fill(0);

  let aChar = 'a'.charCodeAt(0); // charCodeAt is used to find the ASCII key of character

  // Calculate the frequency of each character in magazine
  for (const char of magazine) {
    freq[char.charCodeAt(0) - aChar]++;
  }

  // Check if ransomNote can be constructed
  for (const char of ransomNote) {
    if (freq[char.charCodeAt(0) - aChar] === 0) {
      return false;
    }

    freq[char.charCodeAt(0) - aChar]--;
  }

  return true; // All characters are available
}

// METHOD 2
/*
function canConstruct(ransomNote, magazine) {
  let map = {};

  for (const char of magazine) {
    map[char] = (map[char] | 0) + 1;
  }

  for (const char of ransomNote) {
    if (map[char]) {
      map[char]--;
    } else {
      return false;
    }
  }

  return true;
}
*/
// Example Usage:
let ransomNote1 = 'a',
  magazine1 = 'b';
console.log(canConstruct(ransomNote1, magazine1)); // false

let ransomNote2 = 'aa',
  magazine2 = 'ab';
console.log(canConstruct(ransomNote2, magazine2)); // false

let ransomNote3 = 'aa',
  magazine3 = 'aab';
console.log(canConstruct(ransomNote3, magazine3)); // true

/*
// METHOD 1

Summary
Time Complexity: O(m + n) — where m is the length of the magazine and n is the length of the ransomNote.
Space Complexity: O(1) — constant space due to the fixed-size frequency array.

*/

/*
// METHOD 2

Summary
Time Complexity: O(m + n) — where m is the length of the magazine and n is the length of the ransomNote.
Space Complexity: O(k) — size of unique elements of magazine

*/
