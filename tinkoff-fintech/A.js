const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

let sum = 0;

rl.on('line', (line) => {
  sum += +line;
});

rl.on('close', () => {
  process.stdout.write('' + sum);
});
