const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 1372,
  name: 'Longest ZigZag Path in a Binary Tree',
  url: 'https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/',
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
 * @return {number}
 */
var longestZigZag = function (root) {
  let pathLength = 0;

  function dfs(node, goLeft, steps) {
    if (node == null) {
      return;
    }

    pathLength = Math.max(pathLength, steps);

    if (goLeft) {
      dfs(node.left, false, steps + 1);
      dfs(node.right, true, 1);
    } else {
      dfs(node.left, false, 1);
      dfs(node.right, true, steps + 1);
    }
  }

  dfs(root, false, 0);
  dfs(root, true, 0);

  return pathLength;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(1);

root.left = new TreeNode(1);
root.right = new TreeNode(1);

const label = 'time';
console.time(label);
console.log(longestZigZag(root));
console.timeEnd(label);
