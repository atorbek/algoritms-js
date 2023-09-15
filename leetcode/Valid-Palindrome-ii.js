const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 680,
  name: 'Valid Palindrome II',
  url: 'https://leetcode.com/problems/valid-palindrome-ii/',
  difficulty: difficulty.easy,
  premium: false
};

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  function checkPalindrome(s, i, j) {
    while (i < j) {
      if (s[i] !== s[j]) {
        return false;
      }

      i++;
      j--;
    }

    return true;
  }

  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    if (s[i] !== s[j]) {
      return checkPalindrome(s, i, j - 1) || checkPalindrome(s, i + 1, j);
    }

    i++;
    j--;
  }

  return true;
};

const s1 = 'aba';
const s2 = 'abca';
const s3 = 'abc';
console.time('time');
console.log(validPalindrome(s1));
console.log(validPalindrome(s2));
console.log(validPalindrome(s3));
console.timeEnd('time');
