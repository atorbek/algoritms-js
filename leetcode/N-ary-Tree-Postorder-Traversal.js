const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 590,
  name: 'N-ary Tree Postorder Traversal',
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
var postorder = function (root) {
  const stack = []; // 5 6
  const res = []; // 1 4 2 3 6 5

  stack.push(root);

  while (stack.length) {
    const currentNode = stack.pop();

    if (currentNode) {
      res.push(currentNode.val);

      for (let i = 0; i < currentNode.children.length; i++) {
        stack.push(currentNode.children[i]);
      }
    }
  }

  return res.reverse();
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
console.log(postorder(root));
console.timeEnd(label);
