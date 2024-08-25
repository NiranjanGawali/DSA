/*

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.


Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.


https://leetcode.com/problems/valid-palindrome/description/?envType=study-plan-v2&envId=top-interview-150
*/

function cleanString(input) {
  // Remove non-alphanumeric characters and convert to lowercase
  return input
    .replace(/[^a-zA-Z0-9]/g, '') // Remove all non-alphanumeric characters
    .toLowerCase(); // Convert to lowercase
}

// Is valid palindrome: Method 1 Two pointers

/*
function isPalindrome(str) {
  let inputStr = cleanString(str);

  let start = 0;
  let end = inputStr.length - 1;

  while (start < end) {
    if (inputStr[start] !== inputStr[end]) return false;
    start++;
    end--;
  }

  return true;
}

let s = 'A man, a plan, a canal: Panama';
let result = isPalindrome(s);

console.log('Is string palindrome : ', result);

*/

/*
Time Complexity: O(n) 
Space Complexity: O(1)
*/

// Is valid palindrome: Method 2 Recursive

function isPalindrome(str) {
  if (str.length <= 1) {
    return true; // Base case for recursion: a string with 0 or 1 characters is a palindrome
  }

  let start = 0;
  let end = str.length - 1;

  if (str[start] === str[end]) {
    // Check the substring excluding the first and last characters
    let inputStr = str.slice(start + 1, end);
    return isPalindrome(inputStr);
  } else {
    return false; // Not a palindrome
  }
}

let s = 'A man, a plan, a canal: Panama';
let cleanedStr = cleanString(s);
let result = isPalindrome(cleanedStr);

console.log('Is string palindrome : ', result);

/*
Time Complexity: O(n) 
Space Complexity: O(n)
*/
