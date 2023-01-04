const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 541,
  name: 'Reverse String II',
  url: 'https://leetcode.com/problems/reverse-string-ii/',
  difficulty: difficulty.easy,
  premium: false
};

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  const a = [...s];

  for (let start = 0; start < a.length; start = start + 2 * k) {
    let i = start;
    let j = Math.min(start + k - 1, a.length - 1);

    while (i < j) {
      let tmp = a[i];
      a[i++] = a[j];
      a[j--] = tmp;
    }
  }

  return a.join('');
};

console.time('time');
console.log(reverseStr('abcdefg', 2));
console.log(reverseStr('abcd', 2));
console.timeEnd('time');
