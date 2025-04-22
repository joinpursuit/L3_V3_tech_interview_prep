// Reverse a string
function reverseString(str) {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}

// Find max in array
function findMax(arr) {
  let max = -Infinity;
  for (el of arr) {
    if (el > max) {
      max = el;
    }
  }

  return max;
}

// Check if palindrome
function isPalindrome(word) {
  if (word == reverseString(word)) {
    return true;
  }

  return false;
}

module.exports = { reverseString, findMax, isPalindrome };
