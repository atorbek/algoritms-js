const fs = require('fs');

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

fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    throw err;
  }

  let arr = data.split('\n');
  arr.shift();

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].slice(2);
  }

  arr = arr
    .join(' ')
    .split(' ')
    .map((val) => +val);

  arr = qSort(arr);

  fs.writeFile('output.txt', arr.join(' '), (err) => {
    if (err) throw err;
  });
});
