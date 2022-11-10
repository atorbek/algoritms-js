const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 102,
  name: 'Binary Tree Level Order Traversal',
  url: 'https://leetcode.com/problems/n-ary-tree-preorder-traversal/',
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const stack = [];
  const res = [];

  stack.push(root);

  while (stack.length) {
    const stackLen = stack.length;

    const level = [];
    for (let i = 0; i < stackLen; i++) {
      const node = stack.shift();

      if (node) {
        level.push(node.val);
        stack.push(node.left, node.right);
      }
    }

    if (level.length) {
      res.push(level);
    }
  }

  return res;
};

// [1,2,3,4,null,null,5]

//      1

//  2        3

//4  null  null  5

//[[1],[2,3],[4],[5]]

// [[1],[2,3],[4,5]]

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

const label = 'time';
console.time(label);
console.log(levelOrder(root));
console.timeEnd(label);
