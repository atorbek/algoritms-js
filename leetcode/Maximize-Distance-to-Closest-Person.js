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

var maxDistToClosest2 = function (seats) {
  let maxDist = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < seats.length; windowEnd++) {
    if (seats[windowEnd] === 1 && seats[windowStart] === 1) {
      maxDist = Math.max(maxDist, Math.floor((windowEnd - windowStart) / 2));
      windowStart = windowEnd;
    } else if (
      (windowStart === 0 &&
        seats[windowStart] === 0 &&
        seats[windowEnd] === 1) ||
      (windowEnd === seats.length - 1 &&
        seats[windowEnd] === 0 &&
        seats[windowStart] === 1)
    ) {
      maxDist = Math.max(maxDist, windowEnd - windowStart);
      windowStart = windowEnd;
    }
  }

  return maxDist;
};

console.time('time');
console.log(maxDistToClosest([1, 0, 0, 0, 1, 0, 1]));
console.log(maxDistToClosest([1, 0, 0, 0]));
console.log(maxDistToClosest([0, 1]));
console.timeEnd('time');
