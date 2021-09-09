/*
  Нужно строку типа "AAAABBBFCC" преобразовать в "A4B3FC2"
  и проверяка что входыне данные валидные типо /^[A-Z]+$/ и что это именно строка.
*/
function transformString(str) {
  if (!str.test('/^[A-Z]+$/')) {
    throw 'Invalid str!';
  }
}

const str = 'AAAABBBFCC';
console.time('time');
console.log(transformString(str));
console.timeEnd('time');
