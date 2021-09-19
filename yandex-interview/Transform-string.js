/*
  Нужно строку типа "AAAABBBFCC" преобразовать в "A4B3FC2"
  и проверяка что входыне данные валидные типо /^[A-Z]+$/ и что это именно строка.
*/
function compressArr(str) {
  if (!/^[A-Z]+$/.test(str)) {
    throw 'Invalid str!';
  }

  let l = 0;
  let r = 0;
  let len = str.length;

  let result = '';

  while (l <= len && r <= len) {
    if (str[l] !== str[r]) {
      const d = r - l;
      result += `${str[l]}${d > 1 ? d : ''}`;
      l = r;
    } else {
      r++;
    }
  }

  return result;
}

const str = 'AAAABBBFCC';
console.time('time');
console.log(compressArr(arr));
console.timeEnd('time');
