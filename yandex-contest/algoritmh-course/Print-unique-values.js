const readline = require('readline');

function printUniqueValues(arr) {
  const uniqueElements = new Map();

  arr.forEach((val) => {
    if (uniqueElements.has(val)) {
      uniqueElements.set(val, false);
    } else {
      uniqueElements.set(val, true);
    }
  });

  let result = '';
  for (const element of uniqueElements.keys()) {
    if (uniqueElements.get(element)) {
      result += element + ' ';
    }
  }

  return result.slice(0, -1);
}

const rl = readline.createInterface({
  input: process.stdin
});

let lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  const arr = lines[0].trim().split(' ');
  const result = printUniqueValues(arr);
  process.stdout.write(result.toString());
  process.exit();
});
