const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 56,
  name: 'Merge Intervals',
  url: 'https://leetcode.com/problems/merge-intervals/',
  difficulty: difficulty.medium,
  premium: false
};

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let res = [];

  let end = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= end[1]) {
      end = [
        Math.min(end[0], intervals[i][0]),
        Math.max(end[1], intervals[i][1])
      ];
    } else {
      res.push(end);
      end = intervals[i];
    }
  }

  res.push(end);

  return res;
};

intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18]
];

console.time('time');
console.log(merge(intervals));
console.timeEnd('time');
