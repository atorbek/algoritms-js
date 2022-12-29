const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 9,
  name: 'Palindrome Number',
  url: 'https://leetcode.com/problems/palindrome-number/',
  difficulty: difficulty.easy,
  premium: false
};

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  function getDigitCount(number) {
    return Math.max(Math.floor(Math.log10(Math.abs(number))), 0) + 1;
  }

  if (x < 0) {
    return false;
  }

  let len = getDigitCount(x);
  let c = 1;
  while (len >= 1) {
    l = Math.floor((x / Math.pow(10, len - 1)) % 10);
    r = Math.floor((x / (1 * c)) % 10);

    if (l !== r) {
      return false;
    }

    c = c * 10;
    len -= 1;
  }

  return true;
};

let b = new Date().getMilliseconds();
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
let e = new Date().getMilliseconds();
console.log(e - b + 'ms');
