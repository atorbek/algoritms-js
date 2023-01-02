const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 520,
  name: 'Detect Capital',
  url: 'https://leetcode.com/problems/detect-capital/',
  difficulty: difficulty.easy,
  premium: false
};

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      count++;
    }
  }

  return (
    (count === 1 && word[0] === word[0].toUpperCase()) ||
    count === word.length ||
    count === 0
  );
};

console.time('time');
console.log(detectCapitalUse('USA'));
console.log(detectCapitalUse('FlaG'));
console.log(detectCapitalUse('Google'));
console.log(detectCapitalUse('leetcode'));
console.timeEnd('time');
