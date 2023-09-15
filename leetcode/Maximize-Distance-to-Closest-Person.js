const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 849,
  name: 'Maximize Distance to Closest Person',
  url: 'https://leetcode.com/problems/maximize-distance-to-closest-person/',
  difficulty: difficulty.medium,
  premium: false
};

var maxDistToClosest = function (seats) {
  const len = seats.length;
  let longestZeroGroup = 0;
  let maxDist = 0;

  for (let i = 0; i < len; ++i) {
    if (seats[i] === 1) {
      longestZeroGroup = 0;
    } else {
      longestZeroGroup++;
      maxDist = Math.max(maxDist, Math.floor((longestZeroGroup + 1) / 2));
    }
  }

  for (let i = 0; i < len; ++i) {
    if (seats[i] === 1) {
      maxDist = Math.max(maxDist, i);
      break;
    }
  }

  for (let i = len - 1; i >= 0; --i) {
    if (seats[i] === 1) {
      maxDist = Math.max(maxDist, len - 1 - i);
      break;
    }
  }

  return maxDist;
};

console.time('time');
console.log(maxDistToClosest([1, 0, 0, 0, 1, 0, 1]));
console.log(maxDistToClosest([1, 0, 0, 0]));
console.log(maxDistToClosest([0, 1]));
console.timeEnd('time');
