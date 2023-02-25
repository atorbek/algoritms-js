const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 204,
  name: 'Count Primes',
  url: 'https://leetcode.com/problems/count-primes/',
  difficulty: difficulty.medium,
  premium: false
};

/** Здесь применимо "Решето Эратосфена"
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let nums = new Uint8Array(n);
  let ans = 0;

  // Начинаем со 2-го элемента, потому что 0, 1 не являются
  // простыми числами
  for (let i = 2; i < n; i++) {
    if (!nums[i]) {
      ans += 1;

      // Для каждого числа находим 1-е кратное
      // Первое кратное будет в 2 раза больше текущего
      // Затем находим все числа кратные i
      for (let multi = i * i; multi < n; multi += i) {
        nums[multi] = 1;
      }
    }
  }

  return ans;
};

console.time('time');
console.log(countPrimes(10));
console.log(countPrimes(0));
console.log(countPrimes(1));
console.timeEnd('time');
