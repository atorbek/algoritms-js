const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 22,
  name: 'Generate Parentheses',
  url: 'https://leetcode.com/problems/generate-parentheses/',
  difficulty: difficulty.medium,
  premium: false
};

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const ans = [];

  function backtrack(ans, parentheses, open, close, max) {
    if (parentheses.length === max * 2) {
      ans.push(parentheses.join(''));
      return;
    }

    if (open < max) {
      parentheses.push('(');
      backtrack(ans, parentheses, open + 1, close, max);
      parentheses.pop();
    }

    if (close < open) {
      parentheses.push(')');
      backtrack(ans, parentheses, open, close + 1, max);
      parentheses.pop();
    }
  }

  backtrack(ans, [], 0, 0, n);

  return ans;
};
console.time('time');
console.log(generateParenthesis(3));
console.log(generateParenthesis(1));
console.timeEnd('time');
