function compressIntegers(arr) {
  const arrSort = arr.sort((a, b) => a - b);

  let res = '';
  let temp = arrSort[0];
  let trigger = 0;

  arrSort.slice(1).forEach((el) => {
    if (el - temp === 1) {
      if (!trigger) {
        res = `${res}` + `${temp}`;
      }
      temp = el;
      trigger = 1;
    } else {
      res = `${res}` + `-${temp},`;
      temp = el;
      trigger = 0;
    }
  });

  res = `${res}` + `${temp}`;

  return res.slice(1);
}

console.log(compressIntegers([3, 2, 1, 5, 6, -1, 10]));
