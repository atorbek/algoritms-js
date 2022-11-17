const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 746,
  name: 'Min Cost Climbing Stairs',
  url: 'https://leetcode.com/problems/min-cost-climbing-stairs/',
  difficulty: difficulty.easy,
  premium: false
};

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let step1 = 0;
  let step2 = 0;

  for (let i = cost.length - 1; i >= 0; i--) {
    const currentStep = cost[i] + Math.min(step1, step2);
    step1 = step2;
    step2 = currentStep;
  }

  return Math.min(step1, step2);
};

console.time('time');
console.log(minCostClimbingStairs([10, 15, 20]));
console.timeEnd('time');
