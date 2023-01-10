const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 94,
  name: 'Binary Tree Inorder Traversal',
  url: 'https://leetcode.com/problems/binary-tree-inorder-traversal/',
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
var inorderTraversal = function (root) {
  const res = [];

  function preorder(root) {
    if (root === null) {
      return;
    }

    preorder(root.left);
    res.push(root.val);
    preorder(root.right);
  }

  preorder(root);

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
console.log(inorderTraversal(root));
console.timeEnd(label);
