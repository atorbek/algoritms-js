const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 235,
  name: 'Lowest Common Ancestor of a Binary Search Tree',
  url:
    'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/',
  difficulty: difficulty.medium,
  premium: false
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  while (root !== null) {
    if (p.val > root.val && q.val > root.val) {
      root = root.right;
    } else if (p.val < root.val && q.val < root.val) {
      root = root.left;
    } else {
      return root;
    }
  }
  return null;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(6);

root.left = new TreeNode(2);
root.right = new TreeNode(8);

root.left.left = new TreeNode(0);
root.left.right = new TreeNode(4);

root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);

root.left.right.left = new TreeNode(3);
root.left.right.right = new TreeNode(5);

const label = 'time';
console.time(label);
console.log(lowestCommonAncestor(root, root.left.left, root.right.left));
console.timeEnd(label);
