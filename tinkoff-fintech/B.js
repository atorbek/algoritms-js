const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

let count = 0;

rl.on('line', (line) => {
  const [l, r] = line.split(' ');

  count = repdigitCount(l, r);
});

rl.on('close', () => {
  process.stdout.write('' + count);
});

let repdigitCount = (l, r) => {
  let count = 0;

  for (let i = +l; i <= +r; i++) {
    if (/^(.)\1*$/.test('' + i)) {
      count++;
    }
  }

  return count;
};
