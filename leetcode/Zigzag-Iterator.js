const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 281,
  name: 'Zigzag Iterator',
  url: 'https://leetcode.com/problems/zigzag-iterator/',
  difficulty: difficulty.medium,
  premium: true
};

/**
 * @constructor
 * @param {Integer[]} v1
 * @param {Integer[]} v1
 */
const ZigzagIterator = function ZigzagIterator(v1, v2) {
  this.arr1 = v1;
  this.arr2 = v2;
  this.l1 = 0;
  this.l2 = 0;
  this.isZigzag = true;
};

/**
 * @this ZigzagIterator
 * @returns {boolean}
 */
ZigzagIterator.prototype.hasNext = function hasNext() {
  return this.l1 < this.arr1.length || this.l2 < this.arr2.length;
};

/**
 * @this ZigzagIterator
 * @returns {integer}
 */
ZigzagIterator.prototype.next = function () {
  if (this.isZigzag && this.l1 < this.arr1.length) {
    this.isZigzag = false;
    return this.arr1[this.l1++];
  } else if (this.l2 < this.arr2.length) {
    this.isZigzag = true;
    return this.arr2[this.l2++];
  }
};

const iterator = new ZigzagIterator([1, 2, 3], [3, 4]);

const res = [];

const label = 'time';
console.time(label);

while (iterator.hasNext()) {
  res.push(iterator.next());
}

console.log(res);
console.timeEnd(label);
