const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 543,
  name: 'Diameter of Binary Tree',
  url: 'https://leetcode.com/problems/diameter-of-binary-tree/',
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
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let diameter = 0;

  function diameterBT(root) {
    if (!root) {
      return 0;
    }

    let lh = diameterBT(root.left);
    let rh = diameterBT(root.right);

    diameter = Math.max(diameter, lh + rh);

    return Math.max(lh, rh) + 1;
  }

  diameterBT(root);

  return diameter;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.time('time');
console.log(diameterOfBinaryTree());
console.timeEnd('time');
