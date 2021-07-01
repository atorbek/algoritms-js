function findEqualElements1(arr1, arr2) {
  const len1 = arr1.length;
  const len2 = arr2.length;
  const a1 = len1 >= len2 ? arr1 : arr2;
  const a2 = a1.length <= len1 ? arr2 : arr1;
  const res = [];

  for (let i = 0; i < a1.length; i++) {
    if (a2.indexOf(a1[i]) > -1) {
      res.push(a1[i]);
    }
  }

  return res;
}

function findEqualElements(arr1, arr2) {
  const res = [];
  let iArr1 = 0;
  let iArr2 = 0;

  while (iArr1 < arr1.length && iArr2 < arr2.length) {
    if (arr1[iArr1] === arr2[iArr2]) {
      res.push(arr1[iArr1]);
      iArr1++;
      iArr2++;
    } else if (arr1[iArr1] < arr2[iArr2]) {
      iArr1++;
    } else {
      iArr2++;
    }
  }
  return res;
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let res = new ListNode();
  let resCopy = res;

  while (l1.next !== null && l2.next !== null) {
    if (l1.val > l2.val) {
      resCopy.val = l2.val;
      l2.val = l2.next.val;
      l2.next = l2.next.next;
    } else if (l1.val < l2.val) {
      resCopy.val = l1.val;
      l1.val = l1.next.val;
      l1.next = l1.next.next;
    } else {
      resCopy.val = l2.val;
      l2.val = l2.next.val;
      l2.next = l2.next.next;

      resCopy.next = new ListNode();
      resCopy = resCopy.next;

      resCopy.val = l1.val;
      l1.val = l1.next.val;
      l1.next = l1.next.next;
    }

    resCopy.next = new ListNode();
    resCopy = resCopy.next;
  }

  return res;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4])); // => [2]

// Примеры
console.log(findEqualElements([1, 2, 3], [2])); // => [2]
console.log(findEqualElements([2], [1, 2, 3])); // => [2]
console.log(findEqualElements([1, 2, 2, 3], [2, 2, 2, 2])); // => [2, 2]

// /*
// Согласно григорианскому календарю,
// I век н. э. начался 1 января 1 года и закончился 31 декабря 100 года.
// II век начался в 101 году, III век — в 201 и т. д.
// */
//
// // 1705 > 1700 = 17+1
//
// function centuryFromYear(year) {
//   const yearStr = `${year}`;
//   const century = yearStr.slice(0, 2);
//   if (year > +`${century}00`) {
//     return +century + 1;
//   }
//
//   return +century;
// }
//
// centuryFromYear(1705); // 18
// centuryFromYear(1900); // 19
// centuryFromYear(1601); // 17
// centuryFromYear(2000); // 20
//
// /*
// Написать функцию, которая принимает на вход 2 строковых аргумента,
// подсчитывает количество вхождений строки из второго аргумента в
// строке из первого аргумента.
//
// Замечания:
//   - первый аргумент может быть пустой строкой
//   - второй аргумент может быть только строкой из одного символа
//   - нельзя использовать регулярные выражения
// */
//
// function strCount(str, char) {
//   let count = 0;
//   [...str].forEach((c) => {
//     if (c === char) {
//       count++;
//     }
//   });
//
//   return count;
// }
//
// strCount('Hello', 'o'); // => 1
// strCount('Hello', 'l'); // => 2
// strCount('', 'z'); // => 0
//
// // Есть два сортированных массива с числами.
// // Нужно написать функцию, которая возвращает новый массив,
// // содержащий элементы, которые встречаются в обоих массивах.
// const a = [1, 2, 4, 7, 11, 19];
// const b = [2, 7, 19, 28, 31];
//
// function findEqualElements(arr1, arr2) {
//   const stat = new Map();
//
//   // {2: {arr1:2, arr2: 1}, 1: {arr1: 0}}
//   // 2,2,2,2
//   arr1.forEach((el) => {
//     let val = stat.get(el);
//     if (stat.get(el)) {
//       stat.set(el, val + 1);
//     } else {
//       stat.set(el, 1);
//     }
//   });
//
//   arr2.forEach((el) => {
//     if (stat.get(el)) {
//     }
//   });
//
//   stat.entries((arr) => {});
//
//   return [];
// }
//
// // Примеры
// findEqualElements([1, 2, 3], [2]); // => [2]
// findEqualElements([2], [1, 2, 3]); // => [2]
// findEqualElements([1, 2, 2, 3], [2, 2, 2, 2]); // => [2, 2]

// ----------------

// var n = 1;
//
// function f(n) {
//   n = 3;
// }
// f(n);
//
// console.log(n); // 3
//
// var obj = { a: 1 };
//
// function f1(o) {
//   o.a = 5;
// }
// f1(obj);
//
// console.log(obj); // 5
//
// var obj = { a: 1 };
//
// function f2(o) {
//   o = { hello: 1 };
// }
//
// f2(obj);
//
// console.log(obj); // { a: 1 }
//
//
// // Что будет в консоли после выполнения фрагмента кода?
//
// var i = 10;
// var array = [];
//
// while (i--) {
//   let dec = i;
//   array.push(function() {
//     return dec + dec;
//   });
// }
//
// console.log([
//   array[0](), // -2
//   array[1](), // -2
// ])
//
// // [18, 16]
//
//
//
// // Какой будет результат выполнения строк, отмеченных коментариями?
//
// var a = {
//   name: 'a',
//   foo: function () {
//     console.log(this.name);
//   }
// };
//
// a.foo(); // 1 => a
//
// var bar = a.foo;
// bar(); // 2 => undefiend
//
// var b = {
//   name: 'b'
// };
// b.foo = a.foo;
// b.foo(); // 3 => b
//
// var c = {
//   name: 'c'
// };
//
// bar.call(c); // 4 => c
// a.foo.apply(b); // 5 => b
// a.foo.bind(b).call(c); // 6 => b
// a.foo.bind(b).bind(c)(); // 7 => b
