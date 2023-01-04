const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 344,
  name: 'Reverse String',
  url: 'https://leetcode.com/problems/reverse-string/',
  difficulty: difficulty.easy,
  premium: false
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  for (let i = 0; i < s.length / 2; i++) {
    const tmp = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = tmp;
  }

  return s;
};

console.time('time');
console.log(reverseString(['h', 'e', 'l', 'l', 'o']));
console.log(reverseString(['H', 'a', 'n', 'n', 'a', 'h']));
console.timeEnd('time');
