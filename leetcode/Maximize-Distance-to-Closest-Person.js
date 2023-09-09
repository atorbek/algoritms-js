const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 849,
  name: 'Maximize Distance to Closest Person',
  url: 'https://leetcode.com/problems/maximize-distance-to-closest-person/',
  difficulty: difficulty.medium,
  premium: false
};

var maxDistToClosest = function (seats) {
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
