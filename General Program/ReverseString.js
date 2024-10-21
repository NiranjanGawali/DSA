/*
Reverse the string without recursion
*/

/*

function reverseString(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str.charAt(i);
  }
  return result;
}

console.log(`The reversed string : ${reverseString('hello')}`);

*/

/*
Reverse the string with recursion
*/

function reverseString(str) {
  if (str === '') return '';
  else return reverseString(str.substr(1)) + str.charAt(0); // Recursively call for the rest of the string
}

console.log(`The reversed string : ${reverseString('hello')}`);

/**
 * reverseString('hello') => olleh
 * reverseString('ello') => olle
 * reverseString('llo') => oll
 * reverseString('lo') => ol
 * reverseString('o') => o
 */
