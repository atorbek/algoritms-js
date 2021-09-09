/*
  Условие
  1. Сумма, которую запрашивает клиент есть на счету
  2. Не все суммы можем выдать: причина недостаточно денег
*/
function cashDispenser(ammountRequired, limits) {
  function collect(ammount, nominals) {
    if (ammount === 0) {
      return {};
    }

    if (!nominals.length) {
      return;
    }

    const currentNominal = nominals[0]; // получим купюру текущего номинала
    const availableNotes = limits[currentNominal]; // узнаем кол-во купюр текущего номинала
    const notesNeeded = Math.floor(ammount / currentNominal); // узнаем сколько нужно купюр текущего номинала
    const numberOfNotes = Math.min(availableNotes, notesNeeded); // узнаем сколько можем получить купюр текущего номинала

    console.group('Count');
    console.log('amount', ammount);
    console.log('nominals', nominals);
    console.log('currentNominal', currentNominal);
    console.log('availableNotes', availableNotes);
    console.log('notesNeeded', notesNeeded);
    console.log('numberOfNotes', numberOfNotes);
    console.groupEnd();

    for (let i = numberOfNotes; i >= 0; i--) {
      console.log('Start i', i, 'numberOfNotes', numberOfNotes, 'currentNominal', currentNominal);
      let result = collect(ammount - i * currentNominal, nominals.slice(1));

      if (result) {
        console.log('i', i, 'numberOfNotes', numberOfNotes, 'currentNominal', currentNominal, 'result', result);
        return i ? { [currentNominal]: i, ...result } : result;
      }
    }
  }

  let nominals = Object.keys(limits)
    .map(Number)
    .sort((a, b) => b - a); // получим номиналы купюр в виде списка

  return collect(ammountRequired, nominals);
}

const ammountRequired = 120;
const limits = { 1000: 5, 500: 2, 100: 5, 50: 100, 30: 6 };

console.time('time');
console.log(cashDispenser(ammountRequired, limits));
console.timeEnd('time');
