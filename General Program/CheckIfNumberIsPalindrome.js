/*
Without Recursion
*/

/*
function checkPalindrome(num) {
  let numStr = num.toString();
  let start = 0;
  let end = numStr.length - 1;
  while (start <= end) {
    if (numStr.charAt(start) !== numStr.charAt(end)) return false;
    start++;
    end--;
  }
  return true;
}

let result = checkPalindrome(121);
console.log('Result : ', result);
*/

/*
With Recursion
*/

function checkPalindrome(num) {
  let numStr = num.toString();
  return checkPalindromeFactorial(numStr);
}

function checkPalindromeFactorial(numStr) {
  console.log('Num STR => ', numStr);
  if (numStr.length <= 1) {
    return true;
  }

  if (numStr.charAt(0) === numStr.charAt(numStr.length - 1)) {
    return checkPalindromeFactorial(numStr.slice(1, numStr.length - 1));
  } else {
    return false;
  }
}

let result = checkPalindrome(121);
console.log('Result : ', result);
