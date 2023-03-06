const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 380,
  name: 'Insert Delete GetRandom O(1)',
  url: 'https://leetcode.com/problems/insert-delete-getrandom-o1/',
  difficulty: difficulty.medium,
  premium: false
};

var RandomizedSet = function () {
  this.map = {};
  this.nums = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map[val] !== undefined) {
    return false;
  }

  this.nums.push(val);
  this.map[val] = this.nums.length - 1;

  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.map[val] === undefined) {
    return false;
  }

  let index = this.map[val];
  const len = this.nums.length - 1;

  // удаляемый элемент перемещаем в конец массива nums,
  // чтобы удалить из nums за O(1).
  // На его место перемещаем последний элемент из массива nums
  // и обновляем индекс последнего элемента в map
  [this.nums[index], this.nums[len]] = [this.nums[len], this.nums[index]];
  this.map[this.nums[index]] = index;

  this.nums.pop();
  delete this.map[val];

  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const index = Math.floor(Math.random() * this.nums.length); // [0, n)

  return this.nums[index];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

const res = [];

let randomizedSet = new RandomizedSet();
res.push(randomizedSet.insert(1));
res.push(randomizedSet.remove(2));
res.push(randomizedSet.insert(2));
res.push(randomizedSet.getRandom());
res.push(randomizedSet.remove(1));
res.push(randomizedSet.insert(2));
res.push(randomizedSet.getRandom());

const label = 'time';
console.time(label);
console.log(res);
console.timeEnd(label);
