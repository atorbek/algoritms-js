/**
 * Напишите функцию flatten(array) которая делает вложенный массив плоским
 *
 * Пример:
 *
 * flatten([1, [2, 3]]) === [1, 2, 3]
 * flatten([1, [2, [3, 4]]]) === [1, 2, 3, 4]
 *
 * @param {Array.<number|[]>} array
 * @returns {number[]}
 */
function flatten(array) {
  return array.reduce((acc, cur) => {
    if (Array.isArray(cur)) {
      return [...acc, ...flatten(cur)];
    }

    return [...acc, cur];
  }, []);
}

console.log(flatten([1, [2, [3, 4]]]));
