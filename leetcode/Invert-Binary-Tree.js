const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 226,
  name: 'Invert Binary Tree',
  url: 'https://leetcode.com/problems/invert-binary-tree/',
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) {
    return root;
  }

  const stack = [root];

  while (stack.length) {
    const node = stack.shift();

    const left = node.left;
    node.left = node.right;
    node.right = left;

    node?.left && stack.push(node.left);
    node?.right && stack.push(node.right);
  }

  return root;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(9);

const label = 'time';
console.time(label);
console.log(invertTree(root));
console.timeEnd(label);
