const readline = require('readline');

function getDiplomInFolders(folders) {
  const sortedFolders = folders.sort((a, b) => a - b);
  sortedFolders.splice(-1, 1);

  const minSecondsInWorstCase = sortedFolders.reduce(
    (acc, cur) => acc + +cur,
    0
  );

  return minSecondsInWorstCase;
}

const rl = readline.createInterface({
  input: process.stdin
});

let lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  const folders = lines[1].trim().split(' ');
  const result = getDiplomInFolders(folders);
  process.stdout.write(result.toString());
  process.exit();
});
