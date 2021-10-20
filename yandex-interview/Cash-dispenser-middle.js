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

    for (let i = numberOfNotes; i >= 0; i--) {
      let result = collect(ammount - i * currentNominal, nominals.slice(1));

      if (result) {
        return i ? { [currentNominal]: i, ...result } : result;
      }
    }
  }

  let nominals = Object.keys(limits)
    .map(Number)
    .sort((a, b) => b - a); // получим номиналы купюр в виде списка

  return collect(ammountRequired, nominals);
}

const limits = { 1000: 5, 500: 2, 100: 5, 50: 100, 30: 6 };

console.time('time');

console.log(cashDispenser(1000, limits)); // {1000: 1}
console.log(cashDispenser(230, limits)); // {30: 1, 100: 2}
console.log(cashDispenser(200, limits)); // {100: 2}
console.log(cashDispenser(150, limits)); // {50: 1, 100: 1}
console.log(cashDispenser(120, limits)); // {30: 4}
console.log(cashDispenser(275, limits));
console.timeEnd('time');
