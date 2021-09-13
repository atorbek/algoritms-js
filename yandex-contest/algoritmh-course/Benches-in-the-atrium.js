const readline = require('readline');

function get(l, k, blocks) {
  l = +l;
  k = +k;
  const centerOfPlate = Math.floor(l / 2);

  let left = 0;
  let leftBlock = Number.MIN_SAFE_INTEGER;

  while (left < k) {
    if (l % 2 === 1 && centerOfPlate === +blocks[left]) {
      return blocks[left];
    } else if (+blocks[left] < centerOfPlate) {
      leftBlock = Math.max(+leftBlock, +blocks[left]);
    } else {
      break;
    }

    left++;
  }

  return `${leftBlock} ${+blocks[left]}`;
}

const rl = readline.createInterface({
  input: process.stdin
});

let lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  const [l, k] = lines[0].trim().split(' ');
  const result = get(l, k, lines[1].trim().split(' '));
  process.stdout.write(result);
  process.exit();
});
