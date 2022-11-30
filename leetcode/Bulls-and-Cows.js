const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 299,
  name: 'Bulls and Cows',
  url: 'https://leetcode.com/problems/bulls-and-cows/',
  difficulty: difficulty.middle,
  premium: false
};

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  let bulls = 0;
  let cows = 0;

  const secretMap = {};

  for (let i = 0; i < secret.length; i++) {
    secretMap[secret[i]] = secretMap[secret[i]] + 1 || 1;
  }

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bulls++;
      secretMap[secret[i]] -= 1;
    }
  }

  for (let i = 0; i < secret.length; i++) {
    if (secretMap[guess[i]] && secret[i] !== guess[i]) {
      secretMap[guess[i]] -= 1;
      cows++;
    }
  }

  return `${bulls}A${cows}B`;
};

console.time('time');
console.log(getHint('1807', '7810'));
console.timeEnd('time');
