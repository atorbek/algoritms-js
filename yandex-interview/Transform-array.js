function maxProfit(arr) {
  let l = 0;
  let r = 0;

  let len = arr.length;

  // Сортируем
  arr.sort((a, b) => a - b);

  // Результат
  let res = '';

  while (l < len) {
    r = l;

    while (r + 1 < len && arr[r + 1] === arr[r] + 1) {
      r++;
    }

    if (l == r) {
      res += `${arr[l]}`;
      l++;
    } else {
      res += `${arr[l]}-${arr[r]}`;
      l = r + 1;
    }

    if (l < len) {
      res += ',';
    }
  }

  return res;
}

const arr = [3, 2, 1, 5, 6, -1, 10];
console.time('time');
console.log(maxProfit(arr));
console.timeEnd('time');

//  -1 1 2 3 5 6 10
//l    ^
//r        ^
