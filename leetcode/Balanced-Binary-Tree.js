const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 110,
  name: 'Balanced Binary Tree',
  url: 'https://leetcode.com/problems/balanced-binary-tree/',
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
 * @return {boolean}
 */
var isBalanced = function (root) {
  function maxDepth(root) {
    if (root == null) {
      return 0;
    }

    let l = maxDepth(root.left);
    if (l == -1) {
      return -1;
    }

    let r = maxDepth(root.right);
    if (r == -1) {
      return -1;
    }

    if (Math.abs(l - r) > 1) {
      return -1;
    } else {
      return Math.max(l, r) + 1;
    }
  }

  return maxDepth(root) !== -1;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

//lvl 0
const root = new TreeNode(4);

//lvl 1
root.left = new TreeNode(3);
root.right = new TreeNode(2);

// lvl 2
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(0);
root.right.left = new TreeNode(1);
root.right.right = new TreeNode(1);

// lvl 3
root.left.left.left = new TreeNode(1);
root.left.left.right = new TreeNode(0);

root.right.left.left = new TreeNode(0);
root.right.left.right = new TreeNode(0);

root.right.right.left = new TreeNode(0);
root.right.right.right = new TreeNode(0);

// lvl 4
root.left.left.left.left = new TreeNode(0);

const label = 'time';
console.time(label);
console.log(isBalanced(root));
console.timeEnd(label);
