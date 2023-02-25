const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 204,
  name: 'Count Primes',
  url: 'https://leetcode.com/problems/count-primes/',
  difficulty: difficulty.medium,
  premium: false
};

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  const res = [];

  for (let i = 0; i < n; i++) {
    res[i] = i;
  }

  // Вторым элементом является единица,
  // которую не считают простым числом
  // забиваем ее нулем.
  res[1] = 0;

  let count = 2;

  let i = 2;
  while (i <= n) {
    // Если значение ячейки до этого
    // не было обнулено,
    // в этой ячейке содержится
    // простое число.

    if (res[i] !== 0) {
      // это число составное,
      // поэтому заменяем его нулем
      let j = i + i;

      while (j <= n) {
        res[j] = 0;

        // переходим к следующему числу,
        // которое кратно i
        // (оно на i больше)
        j = j + i;
      }
    }

    i += 1;
  }

  return res.filter((n) => n !== 0).length;
};

console.time('time');
console.log(countPrimes(10));
console.log(countPrimes(0));
console.log(countPrimes(1));
console.timeEnd('time');
