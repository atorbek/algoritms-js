const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 452,
  name: 'Minimum Number of Arrows to Burst Balloons',
  url:
    'https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/',
  difficulty: difficulty.medium,
  premium: false
};

/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  if (points.length === 1) {
    return 1;
  }

  points.sort((a, b) => a[0] - b[0]);

  let end = 1;
  let minimumArrows = 1;

  let interval = points[0];

  while (end < points.length) {
    if (!(interval[0] <= points[end][1] && points[end][0] <= interval[1])) {
      interval = points[end];
      minimumArrows += 1;
    } else {
      interval = [
        Math.max(interval[0], points[end][0]),
        Math.min(interval[1], points[end][1])
      ];
    }

    end += 1;
  }

  return minimumArrows;
};

// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
// ^                 ^
// ^           ^
//     ^             ^
//     ^           ^
//       ^           ^
//       ^         ^
//       ^           ^
//             ^   ^
//              ^            ^
//                   ^ ^

let points = [
  [10, 16],
  [2, 8],
  [1, 6],
  [7, 12]
];

let b = new Date().getMilliseconds();
console.log(findMinArrowShots(points));
let e = new Date().getMilliseconds();
console.log(e - b + 'ms');
