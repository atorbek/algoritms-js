const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 435,
  name: 'Non-overlapping Intervals',
  url: 'https://leetcode.com/problems/non-overlapping-intervals/',
  difficulty: difficulty.medium,
  premium: false
};

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let end = 1;
  let minLeft = 0;
  let minRight = 0;

  let intervalLeft = intervals[0];
  let intervalRight = intervals[intervals.length - 1];

  while (end < intervals.length) {
    if (
      intervalLeft[0] <= intervals[end][1] &&
      intervals[end][0] < intervalLeft[1]
    ) {
      minLeft += 1;
    } else {
      intervalLeft = intervals[end];
    }

    if (
      intervals[intervals.length - 1 - end][0] <= intervalRight[1] &&
      intervalRight[0] < intervals[intervals.length - 1 - end][1]
    ) {
      minRight += 1;
    } else {
      intervalRight = intervals[intervals.length - 1 - end];
    }

    end += 1;
  }

  return Math.min(minLeft, minRight);
};

let b = new Date().getMilliseconds();
console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3]
  ])
);
console.log(
  eraseOverlapIntervals([
    [1, 2],
    [1, 2],
    [1, 2]
  ])
);
console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3]
  ])
);
let e = new Date().getMilliseconds();
console.log(e - b + 'ms');
