/*
  Условие:
   1. Выдать наименьшее кол-во банкнот, которое возможно;
   2. Счет клиента бесконечный;
   3. В банкомате бесконечное кол-во валют;
   4. Банкомат распологает банкнотами номиналом 100, 50, 20, 10.
*/
function cashDispenser(ammountRequired) {
  const notes = [100, 50, 20, 10];
  let result = [];

  if (ammountRequired > 0) {
    for (let i = 0; i < notes.length; i++) {
      const note = notes[i];

      while (ammountRequired - note >= 0) {
        ammountRequired -= note;
        result.push(note);
      }
    }
  } else {
    console.log('Запрашиваемая сумма меньше нуля!');
  }

  return result;
}

const ammountRequired = 90;

console.time('time');
console.log(cashDispenser(ammountRequired));
console.timeEnd('time');
