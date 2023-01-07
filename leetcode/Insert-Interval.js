const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 57,
  name: 'Insert Interval',
  url: 'https://leetcode.com/problems/insert-interval/',
  difficulty: difficulty.medium,
  premium: false
};

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  intervals.push(newInterval);

  intervals.sort((a, b) => a[0] - b[0]);

  let merged = [];

  for (let interval of intervals) {
    if (!merged.length || merged[merged.length - 1][1] < interval[0]) {
      merged.push(interval);
    } else {
      merged[merged.length - 1][1] = Math.max(
        merged[merged.length - 1][1],
        interval[1]
      );
    }
  }

  return merged;
};

console.time('time');
console.log(
  insert(
    [
      [1, 3],
      [6, 9]
    ],
    [2, 5]
  )
);

console.log(
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16]
    ],
    [4, 8]
  )
);
console.timeEnd('time');
