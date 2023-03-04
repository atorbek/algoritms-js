const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 150,
  name: 'Evaluate Reverse Polish Notation',
  url: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/',
  difficulty: difficulty.medium,
  premium: false
};

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];

  const operations = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
    '/': (x, y) => x / y
  };

  for (let i = 0; i < tokens.length; i++) {
    if (operations[tokens[i]]) {
      const operand1 = stack[stack.length - 1];
      stack.pop();

      const operand2 = stack[stack.length - 1];
      stack.pop();

      let res = Math.trunc(operations[tokens[i]](operand2, operand1));
      stack.push(res);
    } else {
      stack.push(+tokens[i]);
    }
  }

  return stack[0];
};

const label = 'time';
console.time(label);
console.log(evalRPN(['2', '1', '+', '3', '*']));
console.log(evalRPN(['4', '13', '5', '/', '+']));
console.log(
  evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'])
);
console.timeEnd(label);
