const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

let lines = [];
rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  let result = 0;
  let reducer = 0;
  for (let i = 1; i <= +lines[0]; i++) {
    if (lines[i] === '1') {
      reducer++;
    } else {
      if (reducer > result) {
        result = reducer;
      }
      reducer = 0;
    }
  }

  process.stdout.write(
    reducer > result ? reducer.toString() : result.toString()
  );
});
