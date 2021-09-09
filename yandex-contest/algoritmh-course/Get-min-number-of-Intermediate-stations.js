function dates(numberStations, workStation, homeStation) {
  let numberStationsOnRing = null;
  let numberStationsReverse = null;

  if (workStation < homeStation) {
    numberStationsOnRing =
      numberStations - workStation - (numberStations - homeStation);
  }

  if (workStation > homeStation) {
    numberStationsOnRing = numberStations - workStation + homeStation;
  }

  numberStationsReverse = numberStations - numberStationsOnRing;

  return Math.min(numberStationsOnRing, numberStationsReverse) - 1;
}
process.stdin.on('data', (data) => {
  let inputData = data.toString().split(' ');
  minStation = dates(+inputData[0], +inputData[1], +inputData[2]);
  process.stdout.write(minStation.toString());
  process.exit();
});
