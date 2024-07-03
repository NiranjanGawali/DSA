// Given a string, find the length of the longest substring in it with no more than K distinct characters.
// You can assume that K is less than or equal to the length of the given string.

/*
This problem follows the Sliding Window pattern, and we can use a similar dynamic sliding window strategy as discussed in Smallest Subarray with a given sum. We can use a HashMap to remember the frequency of each character we have processed. Here is how we will solve this problem:

First, we will insert characters from the beginning of the string until we have K distinct characters in the HashMap.
These characters will constitute our sliding window. We are asked to find the longest such window having no more than K distinct characters. We will remember the length of this window as the longest window so far.
After this, we will keep adding one character in the sliding window (i.e., slide the window ahead) in a stepwise fashion.
In each step, we will try to shrink the window from the beginning if the count of distinct characters in the HashMap is larger than K. We will shrink the window until we have no more than K distinct characters in the HashMap. This is needed as we intend to find the longest window.
While shrinking, well decrement the characters frequency going out of the window and remove it from the HashMap if its frequency becomes zero.
At the end of each step, well check if the current window length is the longest so far, and if so, remember its length.

*/

function longestSubstringWithKdistinct(str, target) {
  let maxLen = 0;
  let map = {};
  let outputString = '';
  let start = 0;

  for (let end = 0; end < str.length; end++) {
    const char = str.charAt(end);
    map[char] = (map[char] || 0) + 1;

    while (Object.keys(map).length > target) {
      let leftChar = str.charAt(start);
      map[leftChar]--;
      if (map[leftChar] == 0) {
        delete map[leftChar];
      }
      start++;
    }

    if (end - start + 1 > maxLen) {
      maxLen = end - start + 1;
      outputString = str.substring(start, end + 1);
    }
  }
  return outputString;
}

// let result = longestSubstringWithKdistinct('araaci', 2); // The longest substring with no more than '2' distinct characters is "araa".
let result = longestSubstringWithKdistinct('araaci', 1); //2, The longest substring with no more than '1' distinct characters is "aa".
// let result = longestSubstringWithKdistinct('cbbebi', 3); //5, The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
console.log('Result: ', result);
