const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 161,
  name: 'One Edit Distance',
  url: 'https://leetcode.com/problems/one-edit-distance/',
  difficulty: difficulty.medium,
  premium: true
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function (s, t) {
  if (Math.abs(s.length - t.length) >= 2 || s === t) {
    return false;
  }

  let l = 0;
  let r = 0;

  let count = 0;

  while (l !== s.length && r !== t.length) {
    if (s[l] === t[r]) {
      l++;
      r++;
    } else if (s.length < t.length) {
      count++;
      r++;
    } else if (s.length > t.length) {
      count++;
      l++;
    } else {
      count++;
      l++;
      r++;
    }
  }

  return !(count > 1);
};

/**

  teacher
l      ^
  tache
r     ^

 */

console.time('time');
console.log(isOneEditDistance('ab', 'acb'));
console.log(isOneEditDistance('', ''));
console.timeEnd('time');
