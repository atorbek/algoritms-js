const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 356,
  name: 'Line Reflection',
  url: 'https://leetcode.com/problems/line-reflection/',
  difficulty: difficulty.medium,
  premium: true
};

/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isReflected = function (points) {
  if (points.length < 2) {
    return true;
  }

  let minX = Infinity;
  let maxX = -Infinity;
  let map = {};

  for (let [x, y] of points) {
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);

    map[x] || (map[x] = {});
    map[x][y] = true;
  }

  let avgX = (minX + maxX) / 2;

  for (let [x, y] of points) {
    let x2 = 2 * avgX - x;

    if (!map[x2] || !map[x2][y]) {
      return false;
    }
  }

  return true;
};

console.time('time');
console.log(
  isReflected([
    [1, 1],
    [-1, 1]
  ])
);
console.log(
  isReflected([
    [1, 1],
    [-1, -1]
  ])
);
console.timeEnd('time');
