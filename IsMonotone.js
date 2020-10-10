function isMonotone(arr) {
  const len = arr.length;
  const isPositive = arr[0] <= arr[len - 1];

  for (let i = 1; i < len; i++) {
    const isCorrect = isPositive ? arr[i] >= arr[i - 1] : arr[i] <= arr[i - 1];
    if (!isCorrect) {
      return false;
    }
  }

  return true;
}

console.log(isMonotone([0, 1, 5, 9, 15]));
console.log(isMonotone([0, 1, 1, 5, 9, 9, 15]));
console.log(isMonotone([15, 8, 4, 2, 1]));
console.log(isMonotone([15, 8, 4, 2, 1, 2]));
console.log(isMonotone([15, 8, 4, 2, 2, 1, 15]));
console.log(isMonotone([15, 20, 25, 30, 35, 40, 40, 15]));
console.log(isMonotone([0, 1, 5, 15, 4]));
