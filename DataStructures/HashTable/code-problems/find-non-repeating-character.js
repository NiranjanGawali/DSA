function firstNonRepeatingChar(str) {
  let map = new Map();
  for (let i = 0; i < str.length; i++) {
    map.set(str[i], (map.get(str[i]) || 0) + 1);
  }

  for (let [key, value] of map) {
    if (value == 1) {
      return key;
    }
  }
  return null;
}

// ---------------
// All Unique
// ---------------
console.log('All Unique:');
console.log("Input: 'abcde'");
console.log('Output: ', JSON.stringify(firstNonRepeatingChar('abcde')));
console.log('---------------');

// ---------------
// Some Duplicates
// ---------------
console.log('Some Duplicates:');
console.log("Input: 'aabbccdef'");
console.log('Output: ', JSON.stringify(firstNonRepeatingChar('aabbccdef')));
console.log('---------------');

// ---------------
// All Duplicates
// ---------------
console.log('All Duplicates:');
console.log("Input: 'aabbcc'");
console.log('Output: ', JSON.stringify(firstNonRepeatingChar('aabbcc')));
console.log('---------------');

// ---------------
// Empty String
// ---------------
console.log('Empty String:');
console.log("Input: ''");
console.log('Output: ', JSON.stringify(firstNonRepeatingChar('')));
console.log('---------------');

// ---------------
// Single Character
// ---------------
console.log('Single Character:');
console.log("Input: 'a'");
console.log('Output: ', JSON.stringify(firstNonRepeatingChar('a')));
console.log('---------------');

// ---------------
// Multiple Non-Repeating Chars
// ---------------
console.log('Multiple Non-Repeating Chars:');
console.log("Input: 'abcdaef'");
console.log('Output: ', JSON.stringify(firstNonRepeatingChar('abcdaef')));
console.log('---------------');
