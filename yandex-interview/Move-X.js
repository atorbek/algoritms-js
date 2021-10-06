
async function MoveX(elem, time, distance) {

  const start = Date.now();

  async function animate() {
    setTimeout(() => {
      let timeFraction = (Date.now() - start) / time;

      if (timeFraction > 1) {
        timeFraction = 1
      };

      elem.left = timeFraction * distance;
      console.log(elem.left)

      if (timeFraction < 1) {
        animate();
      }

    })
  }

  await animate()

  return elem;
}

const elem = { left: 0 };
const time = 1000 // ms
distance = 100

console.time('time');
MoveX(elem, time, distance).then(res => console.log(res));
console.timeEnd('time');
