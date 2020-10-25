/**
 * Счастливым билетом называют такой билет с шестизначным номером,
 * где сумма первых трех цифр равна сумме последних трех.
 *
 * Напишите функцию checkTicket(number) которая проверяет счастливость билета.
 *
 * Пример:
 *
 * checkTicket('005212') === true
 * checkTicket('133700') === true
 * checkTicket('123032') === false
 *
 * @param {string} number
 * @returns {boolean}
 */
function checkTicket(number) {
  const arrayNumbers = [...number];
  let sumLeft = 0;
  let sumRight = 0;

  const len = arrayNumbers.length;

  for (let i = 0; i < arrayNumbers.length / 2; i++) {
    sumLeft += +arrayNumbers[i];
    sumRight += +arrayNumbers[len - 1 - i];
  }

  return sumLeft === sumRight;
}

console.log(checkTicket('005212'));
console.log(checkTicket('133700'));
console.log(checkTicket('123032'));
