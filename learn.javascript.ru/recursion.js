function sumTo(n) {
  if (n === 1) return 1;
  return n + sumTo(n - 1);
}

console.log(sumTo(4)); // P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?

function sumTo1(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumTo1(4));

function sumTo2(n) {
  return (n * (n + 1)) / 2;
}

console.log(sumTo2(4));

function factorial(n) {
  return n === 1 ? 1 : n * factorial(n - 1);
}

console.log(factorial(4));

function fib(n) {
  return n > 2 ? fib(n - 1) + fib(n - 2) : 1;
}

function fib1(n) {
  let a = 1;
  let b = 1;
  let tmp = 0;

  if (n <= 2) {
    return 1;
  }

  for (let i = 3; i <= n; i++) {
    tmp = a + b;
    a = b;
    b = tmp;
  }

  return b;
}

console.log(fib(2));
console.log(fib(7));
// console.log(fib(77)); // зависли 2^n

console.log(fib1(3));
console.log(fib1(77));

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
  if (list.next === null) {
    console.log(list.value);
    return list.value;
  }

  console.log(list.value);
  printList(list.next);
}

printList(list);

function printList1(list) {
  let tmp = list;

  while (tmp.next !== null) {
    console.log(tmp.value);
    tmp = tmp.next;
  }

  console.log(tmp.value);
}

printList1(list);

function reversePrintList(list) {
  if (list.next !== null) {
    reversePrintList(list.next);
  }

  console.log(list.value);
}

reversePrintList(list);

function reversePrintList1(list) {
  let tmp = list;
  const arr = [];

  while (tmp.next !== null) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  arr.push(tmp.value);

  return arr.reverse();
}

console.log(reversePrintList1(list));
