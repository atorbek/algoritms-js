/**
 * Известны результаты каждой из 4х четвертей баскетбольной встречи.
 * Нужно определить победителя матча. Побеждает команда,
 * набравшая больше очков в течение всего матча.
 *
 * Напишите функцию getWinner(points) возвращающую номер победившей команды,
 * либо undefined в случае ничьей.
 *
 * Пример:
 * getWinner(['23-26', '24-30', '30-27', '35-31']) === 2
 * getWinner(['36-32', '32-24', '20-28', '30-26']) === 1
 * getWinner(['36-18', '22-31', '27-21', '19-34']) === undefined
 *
 * @param {string[]} points
 * @returns {(number|undefined)}
 */
function getWinner(points) {
  const res = points.reduce(
    (acc, cur) => {
      const c2 = cur.split('-');

      return [acc[0] + +c2[0], acc[1] + +c2[1]];
    },
    [0, 0]
  );

  console.log(res);

  if (res[0] === res[1]) {
    return undefined;
  }

  return res[0] > res[1] ? 1 : 2;
}

console.log(getWinner(['36-18', '22-31', '27-21', '19-34']));
