// Переписать на O(n)
function getNumberEqualToMaximum(arr) {
  const homes = [];
  arr.forEach((x, index) => {
    if (+x === 1) {
      homes.push(index);
    }
  });

  const shops = [];
  arr.forEach((x, index) => {
    if (+x === 2) {
      shops.push(index);
    }
  });

  // O(n^2)
  return homes.reduce((acc, h) => {
    return Math.max(
      shops.reduce((acc, s) => {
        return Math.min(Math.abs(h - s), acc);
      }, Number.MAX_VALUE),
      acc
    );
  }, 0);
}

process.stdin.on('data', (data) => {
  let inputData = data.toString().split(' ');
  let max = getNumberEqualToMaximum(inputData);
  process.stdout.write(max.toString());
  process.exit();
});

// 2 0 1 1 0 1 0 2 1 2
//               ^
// ^
//       *
