const readline = require('readline');

function getNumberEqualToMaximum(arr) {
  const sortedArr = arr.sort((a, b) => b - a);

  let count = 0;

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[0] !== sortedArr[i]) {
      break;
    }
    count++;
  }

  return count;
}

const rl = readline.createInterface({
  input: process.stdin
});

let lines = [];

rl.on('line', (line) => {
  lines.push(+line);
});

rl.on('close', () => {
  const result = getNumberEqualToMaximum(lines.slice(0, -1));
  process.stdout.write(result.toString());
  process.exit();
});
