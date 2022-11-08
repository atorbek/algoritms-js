const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 589,
  name: 'N-ary Tree Preorder Traversal',
  url: 'https://leetcode.com/problems/n-ary-tree-preorder-traversal/',
  difficulty: difficulty.easy,
  premium: false
};

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  const stack = [];
  const res = [];

  stack.push(root);

  while (stack.length) {
    const currentNode = stack.pop();

    if (currentNode) {
      res.push(currentNode.val);

      for (let i = currentNode.children.length - 1; i >= 0; i--) {
        stack.push(currentNode.children[i]);
      }
    }
  }

  return res;
};

function Node(val, children) {
  this.val = val;
  this.children = children;
}

const two = new Node(2, []);
const five = new Node(5, []);
const six = new Node(6, []);
const three = new Node(3, [five, six]);
const four = new Node(4, []);
const root = new Node(1, [three, two, four]);

const label = 'time';
console.time(label);
console.log(preorder(root));
console.timeEnd(label);
