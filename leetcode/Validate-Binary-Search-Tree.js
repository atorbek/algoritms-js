const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 98,
  name: 'Validate Binary Search Tree',
  url: 'https://leetcode.com/problems/validate-binary-search-tree/',
  difficulty: difficulty.medium,
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
var isValidBST = function (root) {
  let stack = []; // 4 3
  let prev = null; // 5

  // root 4

  while (stack.length > 0 || root != null) {
    while (root != null) {
      stack.push(root);
      root = root.left;
    }

    root = stack[stack.length - 1];

    stack.pop();

    if (prev != null && root.val <= prev.val) {
      return false;
    }

    prev = root;
    root = root.right;
  }

  return true;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(9);
root.left = new TreeNode(6);
root.right = new TreeNode(10);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(7);
root.right.right = new TreeNode(11);
root.left.left.left = new TreeNode(3);
root.left.left.right = new TreeNode(5);
root.left.right.right = new TreeNode(8);

const label = 'time';
console.time(label);
console.log(isValidBST(root));
console.timeEnd(label);
