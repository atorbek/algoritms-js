const readline = require('readline');

const allBracketSequence = [];

const genAllBracketSequence = (n, counterOpen, counterClose, ans) => {
  if (counterOpen + counterClose === 2 * n) {
    allBracketSequence.push(ans.join(''));
    return;
  }
  if (counterOpen < n) {
    ans[counterOpen + counterClose] = '(';
    genAllBracketSequence(n, counterOpen + 1, counterClose, ans);
  }

  if (counterOpen > counterClose) {
    ans[counterOpen + counterClose] = ')';
    genAllBracketSequence(n, counterOpen, counterClose + 1, ans);
  }
};

const rl = readline.createInterface({
  input: process.stdin
});
rl.on('line', (line) => {
  genAllBracketSequence(+line, 0, 0, []);
  process.stdout.write(allBracketSequence.join('\n'));
});
