/*
Согласно григорианскому календарю,
I век н. э. начался 1 января 1 года и закончился 31 декабря 100 года.
II век начался в 101 году, III век — в 201 и т. д.
*/

// 1705 > 1700 = 17+1

function centuryFromYear(year) {
  const yearStr = `${year}`;
  const century = yearStr.slice(0, 2);
  if (year > +`${century}00`) {
    return +century + 1;
  }

  return +century;
}

centuryFromYear(1705); // 18
centuryFromYear(1900); // 19
centuryFromYear(1601); // 17
centuryFromYear(2000); // 20

/*
Написать функцию, которая принимает на вход 2 строковых аргумента,
подсчитывает количество вхождений строки из второго аргумента в
строке из первого аргумента.

Замечания:
  - первый аргумент может быть пустой строкой
  - второй аргумент может быть только строкой из одного символа
  - нельзя использовать регулярные выражения
*/

function strCount(str, char) {
  let count = 0;
  [...str].forEach((c) => {
    if (c === char) {
      count++;
    }
  });

  return count;
}

strCount('Hello', 'o'); // => 1
strCount('Hello', 'l'); // => 2
strCount('', 'z'); // => 0

// Есть два сортированных массива с числами.
// Нужно написать функцию, которая возвращает новый массив,
// содержащий элементы, которые встречаются в обоих массивах.
const a = [1, 2, 4, 7, 11, 19];
const b = [2, 7, 19, 28, 31];

function findEqualElements(arr1, arr2) {
  // code
  return [];
}

// Примеры
findEqualElements([1, 2, 3], [2]); // => [2]
findEqualElements([2], [1, 2, 3]); // => [2]
findEqualElements([1, 2, 2, 3], [2, 2, 2, 2]); // => [2, 2]

//----------------

var n = 1;

function f(n) {
  n = 3;
}
f(n);

console.log(n); // 3

var obj = { a: 1 };

function f1(o) {
  o.a = 5;
}
f1(obj);

console.log(obj); // 5

var obj = { a: 1 };

function f2(o) {
  o = { hello: 1 };
}

f2(obj);

console.log(obj); // { a: 1 }


// Что будет в консоли после выполнения фрагмента кода?

var i = 10;
var array = [];

while (i--) {
  let dec = i;
  array.push(function() {
    return dec + dec;
  });
}

console.log([
  array[0](), // -2
  array[1](), // -2
])

// [18, 16]



// Какой будет результат выполнения строк, отмеченных коментариями?

var a = {
  name: 'a',
  foo: function () {
    console.log(this.name);
  }
};

a.foo(); // 1 => a

var bar = a.foo;
bar(); // 2 => undefiend

var b = {
  name: 'b'
};
b.foo = a.foo;
b.foo(); // 3 => b

var c = {
  name: 'c'
};

bar.call(c); // 4 => c
a.foo.apply(b); // 5 => b
a.foo.bind(b).call(c); // 6 => b
a.foo.bind(b).bind(c)(); // 7 => b
