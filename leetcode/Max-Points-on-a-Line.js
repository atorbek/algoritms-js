const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 149,
  name: 'Max Points on a Line',
  url: 'https://leetcode.com/problems/max-points-on-a-line/',
  difficulty: difficulty.hard,
  premium: false
};

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  let n = points.length;

  if (n == 1) {
    return 1;
  }

  let result = 2;

  for (let i = 0; i < n; i++) {
    const cnt = {};

    for (let j = 0; j < n; j++) {
      if (j != i) {
        let angel = Math.atan2(
          points[j][1] - points[i][1],
          points[j][0] - points[i][0]
        );

        cnt[angel] = cnt[angel] + 1 || 1;
      }
    }
    result = Math.max(result, Math.max(...Object.values(cnt)) + 1);
  }

  return result;
};

console.time('time');
console.log(
  maxPoints([
    [1, 1],
    [2, 2],
    [3, 3]
  ])
);
console.log(
  maxPoints([
    [1, 1],
    [3, 2],
    [5, 3],
    [4, 1],
    [2, 3],
    [1, 4]
  ])
);
console.timeEnd('time');
