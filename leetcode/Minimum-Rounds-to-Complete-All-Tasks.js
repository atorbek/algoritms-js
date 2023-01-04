const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 2244,
  name: 'Minimum Rounds to Complete All Tasks',
  url: 'https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/',
  difficulty: difficulty.medium,
  premium: false
};

/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function (tasks) {
  let freqMap = {};

  for (let i = 0; i < tasks.length; i++) {
    freqMap[tasks[i]] = freqMap[tasks[i]] + 1 || 1;
  }

  let freq = Object.values(freqMap);
  let minimumRounds = 0;

  for (let count of freq) {
    if (count == 1) {
      return -1;
    }

    if (count % 3 == 0) {
      minimumRounds += count / 3;
    } else {
      minimumRounds += Math.trunc(count / 3) + 1;
    }
  }

  return minimumRounds;
};

console.time('time');
console.log(minimumRounds([2, 2, 3, 3, 2, 4, 4, 4, 4, 4]));
console.log(minimumRounds([2, 3, 3]));
console.timeEnd('time');
