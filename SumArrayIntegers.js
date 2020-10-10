function sumArrayIntegers(arr) {
  return arr.reduce((acc, cur) => {
    if (Array.isArray(cur)) {
      return acc + sumArrayIntegers(cur);
    }

    return acc + (parseInt(cur) || 0);
  }, 0);
}

console.log(sumArrayIntegers([1, 2, []]));
console.log(sumArrayIntegers([1, 2, 'x3']));
console.log(sumArrayIntegers([1, [1, 2, [2, 1, 0]], 2]));
