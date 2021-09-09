function isCorrectDate(date) {
  return date[0] <= 31 &&
    date[1] <= 12 &&
    date[0] <= 12 &&
    date[1] <= 31 &&
    date[0] !== date[1]
    ? 0
    : 1;
}

process.stdin.on('data', (data) => {
  let inputData = data.toString().split(' ');
  let minStation = isCorrectDate(inputData);
  process.stdout.write(minStation.toString());
  process.exit();
});
