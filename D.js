const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});
let n = 0;
rl.on('line', (line) => {
  n = +line;
});

const genFirstBracketSequence = (n) => {
  let sequence = '';
  for (let i = 0; i < n; i++) {
    sequence += '(';
  }

  for (let i = 0; i < n; i++) {
    sequence += ')';
  }
  return sequence;
};

const genNextBracketSequence = (seq) => {
  let counter_close = 0;
  let counter_open = 0;

  const seqLen = seq.length;

  for (let i = seqLen - 1; i >= 0; i--) {
    if (seq[i] === '(') {
      counter_open++;
      if (counter_close > counter_open) {
        break;
      }
    } else {
      counter_close++;
    }
  }

  let sequence = seq.slice(0, seqLen - counter_open - counter_close);

  if (sequence === '') {
    return 'No Solution';
  } else {
    sequence += ')';

    for (let i = 0; i < counter_open; i++) {
      sequence += '(';
    }

    for (let i = 0; i < counter_close - 1; i++) {
      sequence += ')';
    }
  }

  return sequence;
};

const genAllBracketSequence = (seq) => {
  process.stdout.write(`${seq}\n`);
  let newSequence = genNextBracketSequence(seq);
  while (newSequence !== 'No Solution') {
    process.stdout.write(`${newSequence}\n`);
    newSequence = genNextBracketSequence(newSequence);
  }
};

rl.on('close', () => {
  let sequence = genFirstBracketSequence(n);
  genAllBracketSequence(sequence);
});
