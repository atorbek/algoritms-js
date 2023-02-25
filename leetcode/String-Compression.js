const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 443,
  name: 'String Compression',
  url: 'https://leetcode.com/problems/string-compression/',
  difficulty: difficulty.medium,
  premium: false
};

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let res = [];
  let count = 1;

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === chars[i + 1]) {
      count++;
    } else if (count > 1) {
      res.push(chars[i], count);
      count = 1;
    } else {
      res.push(chars[i]);
      count = 1;
    }
  }

  res = res.join('').split('');

  for (let i = 0; i < res.length; i++) {
    chars[i] = res[i];
  }

  chars.length = res.length;
};

const label = 'time';
console.time(label);
let chars1 = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
compress(chars1);
console.log(chars1);
let chars2 = ['a'];
compress(chars2);
console.log(chars2);
let chars3 = ['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
compress(chars3);
console.log(chars3);
console.timeEnd(label);
