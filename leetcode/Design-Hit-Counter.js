const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: -1,
  name: 'Design Hit Counter',
  url: 'https://leetcode.com/problems/design-hit-counter/',
  difficulty: difficulty.undefined,
  premium: false
};

var HitCounter = function () {
  this.q = [];
};

/**
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function (timestamp) {
  this.q.push(timestamp);
};

/**
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function (timestamp) {
  while (this.q.length > 0 && timestamp - this.q[0] >= 300) {
    this.q.shift();
  }

  return this.q.length;
};

hitCounter = new HitCounter();
hitCounter.hit(1); // hit at timestamp 1.
hitCounter.hit(2); // hit at timestamp 2.
hitCounter.hit(3); // hit at timestamp 3.
hitCounter.getHits(4); // get hits at timestamp 4, return 3.
hitCounter.hit(300); // hit at timestamp 300.
hitCounter.getHits(300); // get hits at timestamp 300, return 4.
hitCounter.getHits(301); // get hits at timestamp 301, return 3.
