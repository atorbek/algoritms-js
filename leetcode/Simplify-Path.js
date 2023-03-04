const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 71,
  name: 'Simplify Path',
  url: 'https://leetcode.com/problems/simplify-path/',
  difficulty: difficulty.medium,
  premium: false
};

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let stack = path.split('/');

  let res = [];

  for (let i = 0; i < stack.length; i++) {
    if (stack.length && stack[i] === '..') {
      res.pop();
    } else if (stack[i].length && stack[i] !== '.') {
      res.push(stack[i]);
    }
  }

  return '/' + res.join('/');
};

console.time('time');
console.log(simplifyPath('/home/'));
console.log(simplifyPath('/../'));
console.log(simplifyPath('/home//foo/'));
console.timeEnd('time');
