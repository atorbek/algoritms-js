const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

let res = '';
let prevLine = '';
rl.once('line', () => {
  rl.on('line', (line) => {
    if (line !== prevLine) {
      res += `${line}\n`;
    }

    if (res.length > 100) {
      process.stdout.write(res);
      res = '';
    }
    prevLine = line;
  });
});

rl.on('close', () => {
  process.stdout.write(res);
});
