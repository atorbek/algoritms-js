const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 1833,
  name: 'Maximum Ice Cream Bars',
  url: 'https://leetcode.com/problems/maximum-ice-cream-bars/',
  difficulty: difficulty.medium,
  premium: false
};

/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
  costs.sort((a, b) => a - b);

  let n = costs.length;
  let icecream = 0;

  while (icecream < n && costs[icecream] <= coins) {
    coins -= costs[icecream];
    icecream += 1;
  }

  return icecream;
};

console.time('time');
console.log(maxIceCream([1, 3, 2, 4, 1], 7));
console.log(maxIceCream([10, 6, 8, 7, 7, 8], 5));
let e = new Date().getMilliseconds();
console.timeEnd('time');
