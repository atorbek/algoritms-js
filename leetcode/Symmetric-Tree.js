const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 101,
  name: 'Symmetric Tree',
  url: 'https://leetcode.com/problems/symmetric-tree/',
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
var isSymmetric = function (root) {
  function isSymmetricTree(p, q) {
    if (!p && !q) {
      return true;
    }

    if (p && q) {
      return (
        p.val === q.val &&
        isSymmetricTree(p.left, q.right) &&
        isSymmetricTree(p.right, q.left)
      );
    }

    return false;
  }

  return isSymmetricTree(root.left, root.right);
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(2);

root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);

root.right.left = new TreeNode(4);
root.right.right = new TreeNode(4);

console.time('time');
console.log(isSymmetric(root));
console.timeEnd('time');
