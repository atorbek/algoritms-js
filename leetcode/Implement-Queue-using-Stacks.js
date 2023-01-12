const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 232,
  name: 'Implement Queue using Stacks',
  url: 'https://leetcode.com/problems/implement-queue-using-stacks/',
  difficulty: difficulty.medium,
  premium: false
};

const MyQueue = function () {
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  const tmp = this.stack[0];
  this.stack.shift();
  return tmp;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.stack[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.stack.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

const label = 'time';
console.time(label);
const myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false
console.timeEnd(label);
