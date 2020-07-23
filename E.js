const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

const sortStr = (str) => [...str].sort().join('');

let lines = [];
rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  process.stdout.write(sortStr(lines[0]) === sortStr(lines[1]) ? '1' : '0');
});
