const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 944,
  name: 'Delete Columns to Make Sorted',
  url: 'https://leetcode.com/problems/delete-columns-to-make-sorted/',
  difficulty: difficulty.easy,
  premium: false
};

/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  let res = 0;

  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j - 1].charCodeAt(i) > strs[j].charCodeAt(i)) {
        res++;
        break;
      }
    }
  }

  return res;
};

console.time('time');
console.log(minDeletionSize(['cba', 'daf', 'ghi']));
console.log(minDeletionSize(['a', 'b']));
console.log(minDeletionSize(['zyx', 'wvu', 'tsr']));
console.timeEnd('time');
