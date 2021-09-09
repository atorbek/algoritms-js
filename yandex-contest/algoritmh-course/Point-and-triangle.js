const readline = require('readline');

function pointAndTriangle(d, x) {
  // Принадлежность треугольнику
  let ax = 0;
  let ay = 0;
  let bx = d;
  let by = 0;
  let cx = 0;
  let cy = d;

  let xx = +x[0];
  let xy = +x[1];

  let k = (ax - xx) * (by - ay) - (bx - ax) * (ay - xy);
  let m = (bx - xx) * (cy - by) - (cx - bx) * (by - xy);
  let n = (cx - xx) * (ay - cy) - (ax - cx) * (cy - xy);

  if ((k >= 0 && m >= 0 && n >= 0) || (k <= 0 && m <= 0 && n <= 0)) {
    return 0;
  }

  let A = 1;
  let B = 2;
  let C = 3;

  // 1
  if (xx > 0 && xy > 0) {
    if (xx === xy) {
      return B;
    } else if (xx > xy) {
      return B;
    } else {
      return C;
    }
  }

  // 2
  if (xx > 0 && xy < 0) {
    if (d / 2 === xx) {
      return A;
    } else if (d / 2 < xx) {
      return B;
    } else {
      return A;
    }
  }

  // 4
  if (xx < 0 && xy > 0) {
    if (d / 2 === xy) {
      return A;
    } else if (d / 2 < xy) {
      return C;
    } else {
      return A;
    }
  }

  // 3
  return A;
}

const rl = readline.createInterface({
  input: process.stdin
});

let lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  const result = pointAndTriangle(+lines[0], lines[1].split(' '));
  process.stdout.write(result.toString());
  process.exit();
});
