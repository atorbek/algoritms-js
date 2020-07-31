const readline = require('readline');

const qSort = (array) => {
  const lenArr = array.length;

  if (lenArr < 2) {
    return array;
  }

  const pivotIndex = Math.round(lenArr / 2);
  const pivot = array[Math.round(pivotIndex)];
  const less = array.filter((val, i) => pivotIndex !== i && val <= pivot);
  const greater = array.filter((val, i) => pivotIndex !== i && val > pivot);

  return [...qSort(less), pivot, ...qSort(greater)];
};

const rl = readline.createInterface({
  input: process.stdin
});

let lines = [];
let count = 0;
rl.on('line', (line) => {
  count++;
  if (count > 1) {
    lines = [
      ...lines,
      ...line
        .split(' ')
        .slice(1)
        .map((val) => +val)
    ];
  }
});

rl.on('close', () => {
  process.stdout.write(qSort(lines).join(' '));
});
