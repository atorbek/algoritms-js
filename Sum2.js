/**
 * Напишите функцию sum(n) возвращающую положительное целое число – сумму чисел,
 * расположенных между 1 и N включительно.
 *
 * Пример:
 *
 * sum(0) === 1
 * sum(5) === 15
 *
 * Больше примеров в тестах
 *
 * @param {number} n целое число
 * @returns {number}
 */
function sum(n) {
  let sum = 0;

  if (n <= 0) {
    return 1;
  }

  while (n !== 0) {
    sum += n;
    n--;
  }

  return sum;
}

function sum2(n) {
  return n <= 1 ? 1 : n + sum2(--n);
}

console.log(sum2(5));
console.log(sum(5));
