const { reverseString, findMax, isPalindrome } = require('./problems');

test('reverseString reverses a word', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('x')).toBe('x');
  expect(reverseString('')).toBe('');
});

test('findMax returns the largest number', () => {
  expect(findMax([1, 5, 3, 9])).toBe(9);
  expect(findMax([1, -5, -9])).toBe(1);
  expect(findMax([1])).toBe(1);
  expect(findMax([])).toBe(-Infinity);
});

test('isPalindrome checks for palindrome correctly', () => {
  expect(isPalindrome('racecar')).toBe(true);
  expect(isPalindrome('hello')).toBe(false);
  expect(isPalindrome('x')).toBe(true);
  expect(isPalindrome('')).toBe(true);
});
