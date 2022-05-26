const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 70,
  name: 'Climbing Stairs',
  url: 'https://leetcode.com/problems/climbing-stairs/',
  difficulty: difficulty.easy,
  premium: false
};

/**
 * https://leetcode.com/problems/climbing-stairs/
 *
 * You are climbing a staircase. It takes n steps to reach the top.
 *
 * Each time you can either climb 1 or 2 steps.
 * In how many distinct ways can you climb to the top?
 *
 * Example 1:
 * Input: n = 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 *
 * Example 2:
 * Input: n = 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 *
 *
 * Constraints:
 * 1 <= n <= 45
 *
 */
function climbStairs2(n) {
  let memo = {
    1: 1,
    2: 2
  };

  function step(n) {
    if (n === 1) {
      return 1;
    }

    if (n === 2) {
      return 2;
    }

    const n1 = memo[n - 1] || step(n - 1);
    const n2 = memo[n - 2] || step(n - 2);

    memo[n] = n1 + n2;

    return n1 + n2;
  }

  return step(n);
}

function climbStairs(n) {
  let last1 = 1;
  let last2 = 0;
  let result = 0;
  for (let i = 0; i < n; i++) {
    result = last1 + last2;
    last2 = last1;
    last1 = result;
  }
  return result;
}

// 1 -> 1
// 2 -> 2
// 3 -> 3
// 4 -> 5
// 5 -> 8
// 6 -> 13
// 7 -> 21

// f(n) = f(n - 1) + f(n - 2)

console.time('time');
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(5));
console.log(climbStairs(10));
console.log(climbStairs(45));
console.timeEnd('time');
