const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 1768,
  name: 'Merge Strings Alternately',
  url: 'https://leetcode.com/problems/merge-strings-alternately/',
  difficulty: difficulty.easy,
  premium: false
};

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  const res = [];
  let i = 0,
    j = 0;

  while (word1.length !== i || word2.length !== j) {
    if (word1[i] && word2[j]) {
      res.push(word1[i], word2[j]);
      i++;
      j++;
    } else if (word1[i] && !word2[j]) {
      res.push(word1[i]);
      i++;
    } else {
      res.push(word2[j]);
      j++;
    }
  }

  return res.join('');
};

const label = 'time';
console.time(label);
console.log(mergeAlternately('abc', 'pqr'));
console.log(mergeAlternately('ab', 'pqrs'));
console.log(mergeAlternately('abcd', 'pq'));
console.timeEnd(label);
