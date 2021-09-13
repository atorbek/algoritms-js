const readline = require('readline');

function getNumberOfMatches(arr1, arr2) {
  return arr1.length + arr2.length - new Set([...arr1, ...arr2]).size;
}

const rl = readline.createInterface({
  input: process.stdin
});

let lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  const arr1 = lines[0].trim().split(' ');
  const arr2 = lines[1].trim().split(' ');
  const result = getNumberOfMatches(arr1, arr2);
  process.stdout.write(result.toString());
  process.exit();
});
