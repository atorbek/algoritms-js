const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 509,
  name: 'Fibonacci Number',
  url: 'https://leetcode.com/problems/fibonacci-number/',
  difficulty: difficulty.easy,
  premium: false
};

/**
 * https://leetcode.com/problems/fibonacci-number/
 *
 * The Fibonacci numbers, commonly denoted F(n) form a sequence,
 * called the Fibonacci sequence, such that each number is the sum of the two preceding ones,
 *  starting from 0 and 1. That is,
 *
 * F(0) = 0, F(1) = 1
 * F(n) = F(n - 1) + F(n - 2), for n > 1.
 * Given n, calculate F(n).
 *
 *
 * Example 1:
 *
 * Input: n = 2
 * Output: 1
 * Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
 * Example 2:
 *
 * Input: n = 3
 * Output: 2
 * Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
 * Example 3:
 *
 * Input: n = 4
 * Output: 3
 * Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 *
 *
 * Constraints:
 *
 * 0 <= n <= 30
 *
 */
function fib1(n) {
  let memo = {
    0: 0,
    1: 1
  };

  function step(n) {
    if (n === 0) {
      return 0;
    }

    if (n === 1) {
      return 1;
    }

    const n1 = memo[n - 1] || step(n - 1);
    const n2 = memo[n - 2] || step(n - 2);

    memo[n] = n1 + n2;

    return n1 + n2;
  }

  return step(n);
}

function fib(n) {
  if (n <= 1) {
    return n;
  }

  let prev = 1;
  let prevOfprev = 0;
  let curr = prevOfprev + prev;
  for (let i = 2; i <= n; i++) {
    curr = prevOfprev + prev;
    prevOfprev = prev;
    prev = curr;
  }
  return curr;
}

// f(n) = f(n - 1) + f(n - 2)

console.time('time');
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(30));
console.timeEnd('time');
