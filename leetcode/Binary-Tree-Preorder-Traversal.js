const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 144,
  name: 'Binary Tree Preorder Traversal',
  url: 'https://leetcode.com/problems/binary-tree-preorder-traversal/',
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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const res = [];

  function preorder(root) {
    if (root === null) {
      return;
    }

    res.push(root.val);

    preorder(root.left);
    preorder(root.right);
  }

  preorder(root);

  return res;
};

var preorderTraversalIterative = function (root) {
  const stack = [root];
  const res = [];

  while (stack.length) {
    const node = stack.pop();

    if (node) {
      res.push(node.val);
      stack.push(node.right);
      stack.push(node.left);
    }
  }

  return res;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

//lvl 0
const root = new TreeNode(1);

//lvl 1
root.right = new TreeNode(2);

// lvl 2
root.right.left = new TreeNode(3);

const label = 'time';
console.time(label);
console.log(preorderTraversal(root));
console.log(preorderTraversalIterative(root));
console.timeEnd(label);
