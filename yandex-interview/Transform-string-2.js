/*
  Нужно строку типа "AAAABBBFCC" преобразовать в "A4B3FC2"
  и проверяка что входыне данные валидные типо /^[A-Z]+$/ и что это именно строка.
*/
function compressArr(str) {
  let l = 0;
  let r = 0;
  let len = str.length - 1;

  let res = '';
  while (r < len) {
    r = l;

    while (str[r] === str[r + 1]) {
      r += 1;
    }

    if (l === r) {
      res += str[r];
    } else {
      res += r - l + 1;
      res += str[r];
    }

    l = r + 1;
  }

  return res;
}

const str = 'AAAABBBFCC';
console.time('time');
console.log(compressArr(str));
console.timeEnd('time');

//  AAAABBBFCC
//l        ^
//r         ^
