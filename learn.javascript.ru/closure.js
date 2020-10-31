// 1-вариант

function sumLiteVariant(a) {
  return (b) => a + b;
}

sumLiteVariant(1)(2);

console.log(sumLiteVariant(2)(5));

// 2-вариант написать функцию карирования

function sum(a, b) {
  return a + b;
}

// 1. const s = curring(sum)
// 2.  s(a) || s(a,b) || s(a,b,c)
// 3.  s(a)(b)

const curry = (f) => (...args) => {
  if (args.length >= f.length) {
    return f(...args);
  } else {
    const pass = curry(f);
    return (...args2) => pass(...args, ...args2);
  }
};

const s = curry(sum);
console.log(s(2)(5));

/* ----------------------------------------- */

/* .. ваш код для inBetween и inArray */
let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
  return (c) => c >= a && c <= b;
}

function inArray(arr) {
  return (item) => arr.includes(item);
}

// filter(()=> {})

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6
console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

/* ----------------------------------------- */

let users = [
  { name: 'John', age: 20, surname: 'Johnson' },
  { name: 'Pete', age: 18, surname: 'Peterson' },
  { name: 'Ann', age: 19, surname: 'Hathaway' }
];

function byField(prop) {
  return (obj1, obj2) => (obj1[prop] > obj2[prop] ? 1 : -1);
}

console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));

/* ----------------------------------------- */

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let count = i;
    let shooter = function () {
      console.log(count); // должна выводить порядковый номер
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
// Почему у всех стрелков одинаковые номера? Почините код, чтобы он работал как задумано.
