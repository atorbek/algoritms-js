function oddSort(arr) {
  function isOdd(n) {
    return n % 2 !== 0;
  }

  const numsOdd = arr.filter((n) => isOdd(n));

  numsOdd.sort((a, b) => a - b);

  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (isOdd(arr[i])) {
      arr[i] = numsOdd[j];
      j += 1;
    }
  }

  return arr;
}

var arr = [2, 3, 7, 4, 6, 1, 5, 8, 9];

console.time('time');
console.log(oddSort(arr));
console.timeEnd('time');
