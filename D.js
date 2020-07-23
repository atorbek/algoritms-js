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
  let dictionary1 = {};
  let dictionary2 = {};

  lines.forEach((el) => {
    if (!dictionary1.hasOwnProperty(el)) {
      dictionary1[el] = 0;
    } else {
      dictionary1[el]++;
    }
  });

  lines.forEach((el) => {
    if (!dictionary2.hasOwnProperty(el)) {
      dictionary2[el] = 0;
    } else {
      dictionary2[el]++;
    }
  });

  if (Object.keys(dictionary1).length !== Object.keys(dictionary1).length) {
    process.stdout.write('0');
  }

  for (let item in dictionary1) {
    if (dictionary1[item] !== dictionary2[item]) {
      process.stdout.write('0');
      process.exit();
    }
  }

  process.stdout.write('1');
});
