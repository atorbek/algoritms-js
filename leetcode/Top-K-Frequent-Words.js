const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 692,
  name: 'Top K Frequent Words',
  url: 'https://leetcode.com/problems/top-k-frequent-words/',
  difficulty: difficulty.medium,
  premium: false
};

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const map = {};

  const res = [];

  for (const word of words) {
    map[word] = map[word] + 1 || 0;
  }

  const repeats = Object.entries(map)
    .sort((a, b) => b[1] - a[1])
    // TODO also we can use MaxPriorityQueue
    .sort(
      (a, b) => a[1] === b[1] && (a[0] !== b[0] ? (a[0] < b[0] ? -1 : 1) : 0)
    );

  for (let i = 0; i < k; i++) {
    res.push(repeats[i][0]);
  }

  return res;
};

console.time('time');
console.log(
  topKFrequent([
    'the',
    'day',
    'is',
    'sunny',
    'the',
    'the',
    'the',
    'sunny',
    'is',
    'is'
  ])
);
console.log(topKFrequent([1]));
console.timeEnd('time');
