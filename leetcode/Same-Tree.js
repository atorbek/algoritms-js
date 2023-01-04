const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 100,
  name: 'Same Tree',
  url: 'https://leetcode.com/problems/same-tree/',
  difficulty: difficulty.easy,
  premium: false
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p && !q) {
    return true;
  }

  if (p && q) {
    return (
      p.val === q.val &&
      isSameTree(p.left, q.left) &&
      isSameTree(p.right, q.right)
    );
  }

  return false;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const p = new TreeNode(1);
p.left = new TreeNode(2);
p.right = new TreeNode(1);

const q = new TreeNode(1);
q.left = new TreeNode(1);
q.right = new TreeNode(2);

console.time('time');
console.log(isSameTree(p, q));
console.timeEnd('time');
