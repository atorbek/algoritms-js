const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 557,
  name: 'Reverse Words in a String III',
  url: 'https://leetcode.com/problems/reverse-words-in-a-string-iii/',
  difficulty: difficulty.easy,
  premium: false
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let a = s.split('');

  for (let i = 0; i < a.length; i++) {
    // n

    const str = a[i].split(''); // n
    for (let j = 0; j < str.length / 2; j++) {
      // n/2
      const tmp = str[j];
      str[j] = str[str.length - 1 - j];
      str[str.length - 1 - j] = tmp;
    }

    a[i] = str.join('');
  }

  return a.join(' '); // n
}; // TODO It's not optimal solution with O(n^2) by time

console.time('time');
// eslint-disable-next-line quotes
console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords('God Ding'));
console.timeEnd('time');
