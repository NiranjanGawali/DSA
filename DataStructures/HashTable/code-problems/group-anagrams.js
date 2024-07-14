function groupAnagrams(anagramArray) {
  let map = new Map();
  for (const singleElement of anagramArray) {
    let formattedField = getSortedString(singleElement);
    if (map.has(formattedField)) {
      map.get(formattedField).push(singleElement);
    } else {
      const group = [singleElement];
      map.set(formattedField, group);
    }
  }
  return Array.from(map.values());
}

function getSortedString(str) {
  let arr = str.split('').sort();
  return arr.join('');
}

// ---------------
// Lowercase Anagrams
// ---------------
console.log('Lowercase Anagrams:');
console.log("Input: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']");
console.log(
  'Output: ',
  JSON.stringify(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
);
console.log('---------------');

// ---------------
// Mixed Case Anagrams
// ---------------
console.log('Mixed Case Anagrams:');
console.log("Input: ['Eat', 'Tea', 'Tan', 'Ate', 'Nat', 'Bat']");
console.log(
  'Output: ',
  JSON.stringify(groupAnagrams(['Eat', 'Tea', 'Tan', 'Ate', 'Nat', 'Bat']))
);
console.log('---------------');

// ---------------
// No Anagrams
// ---------------
console.log('No Anagrams:');
console.log("Input: ['hello', 'world', 'test']");
console.log(
  'Output: ',
  JSON.stringify(groupAnagrams(['hello', 'world', 'test']))
);
console.log('---------------');

// ---------------
// Empty Strings
// ---------------
console.log('Empty Strings:');
console.log("Input: ['', '', '']");
console.log('Output: ', JSON.stringify(groupAnagrams(['', '', ''])));
console.log('---------------');

// ---------------
// Single Characters
// ---------------
console.log('Single Characters:');
console.log("Input: ['a', 'b', 'a']");
console.log('Output: ', JSON.stringify(groupAnagrams(['a', 'b', 'a'])));
console.log('---------------');
