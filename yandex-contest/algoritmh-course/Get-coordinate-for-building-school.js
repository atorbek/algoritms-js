const readline = require('readline');

function getCoordinateForBuildingSchool(n, coordinateOfHomes = []) {
  return +coordinateOfHomes[Math.floor(n / 2)];
}

const rl = readline.createInterface({
  input: process.stdin
});

let lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  const result = getCoordinateForBuildingSchool(+lines[0], lines[1].split(' '));
  process.stdout.write(result.toString());
  process.exit();
});
