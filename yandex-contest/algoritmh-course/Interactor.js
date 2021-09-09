const readline = require('readline');

function interactor(code, interactorVerdict, checkerVerdict) {
  if (
    (interactorVerdict === 4 && code !== 0) ||
    (interactorVerdict === 0 && code !== 0)
  ) {
    return 3;
  } else if (
    interactorVerdict === 1 ||
    (interactorVerdict === 0 && code === 0)
  ) {
    return checkerVerdict;
  } else if (interactorVerdict === 4 && code === 0) {
    return 4;
  } else if (interactorVerdict === 6) {
    return 0;
  } else if (interactorVerdict === 7) {
    return 1;
  }

  return interactorVerdict;
}

const rl = readline.createInterface({
  input: process.stdin
});

let lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

let finalVerdict;
rl.on('close', () => {
  finalVerdict = interactor(+lines[0], +lines[1], +lines[2]);
  process.stdout.write(finalVerdict.toString());
  process.exit();
});
