/**
 * Сумма с произвольным количеством скобок
 * @param a
 * @example sum(1)(2)(3)()
 * @returns {func}
 */
const sum = (a) => {
  let currentSum = a;
  const func = (b) => {
    if (typeof b === 'number') {
      currentSum += b;
      return func;
    }

    return currentSum;
  };

  return func;
};

/**
 * Сумма с произвольным количеством скобок
 * @param a
 * @example sum(1)(2)(3)
 * @returns {function(*): function(*)}
 */
function sum2(a) {
  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f[Symbol.toPrimitive] = function () {
    return currentSum - 1;
  };

  return f;
}
