const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 394,
  name: 'Decode String',
  url: 'https://leetcode.com/problems/decode-string/description/',
  difficulty: difficulty.medium,
  premium: false
};

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const counts = []; // 3
  const result = []; //
  let res = ''; // acc
  let i = 0;

  // 3[a2[c]]
  //        ^

  while (i < s.length) {
    if (Number.isInteger(+s[i])) {
      let count = 0;

      while (Number.isInteger(+s[i])) {
        count = 10 * count + +s[i];
        i += 1;
      }

      counts.push(count);
    } else if (s[i] === '[') {
      result.push(res);
      res = '';
      i += 1;
    } else if (s[i] === ']') {
      let temp = [result.pop()];
      let count = counts.pop();

      for (let i = 0; i < count; i++) {
        temp.push(res);
      }

      res = temp.join('');
      i += 1;
    } else {
      res += s[i];
      i += 1;
    }
  }

  return res;
};

let b = new Date().getMilliseconds();
console.log(decodeString('3[a]2[bc]'));
console.log(decodeString('3[a2[c]]'));
console.log(decodeString('2[abc]3[cd]ef'));
let e = new Date().getMilliseconds();
console.log(e - b + 'ms');
