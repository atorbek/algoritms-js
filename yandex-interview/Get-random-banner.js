/*
  Есть список баннеров с заданным весом w(натуральное число) для каждого баннера.
  Частота показа каждого баннера пропорциональна его весу.
  Задача реализовать функцию выбора баннера для случайного пользователя.
  Пример для js:

  var list = [{ w: 10, banner: { id: 1 } }, { w: 130, banner: { id: 2 } }, { w: 50, banner: { id: 3 } }];
*/
function transformString(list) {
  const sumWeight = list.reduce((acc, cur) => acc + cur.w, 0);

  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  const randomNumber = getRandom(0, sumWeight);
  let sum = 0;

  console.log('randomNumber', randomNumber);

  for (let i = 0; i < list.length; i++) {
    const banner = list[i];

    sum += banner.w;

    if (sum > randomNumber) {
      console.log('sum', sum);
      return banner;
    }
  }
}

var list = [
  { w: 10, banner: { id: 1 } },
  { w: 100, banner: { id: 2 } },
  { w: 50, banner: { id: 3 } }
];

console.time('time');
console.log(transformString(list));
console.timeEnd('time');
