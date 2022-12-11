const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 1046,
  name: 'Last Stone Weight',
  url: 'https://leetcode.com/problems/last-stone-weight/',
  difficulty: difficulty.easy,
  premium: false
};

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  const heap = new MaxPriorityQueue();

  for (const stone of stones) {
    heap.enqueue(stone);
  }

  while (heap.size() > 1) {
    const y = heap.dequeue().element;
    const x = heap.dequeue().element;
    const diff = y - x;

    if (diff) {
      heap.enqueue(diff);
    }
  }

  return heap.size() === 0 ? 0 : heap.front().element;
};

console.time('time');
console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
console.log(lastStoneWeight([1]));
console.timeEnd('time');
