const list = [
  { w: 10, banner: { id: 1 } },
  { w: 130, banner: { id: 2 } },
  { w: 50, banner: { id: 3 } }
];

function getBanner(list) {
  const sumWeight = list.reduce((acc, cur) => {
    return acc + cur.w;
  }, 0);

  const random = Math.random();

  const sortedList = list.sort((a, b) => a.w - b.w);

  sortedList.reduce((acc, cur, i) => {
    const rightRange = Math.floor((cur.w * 100) / sumWeight) / 100;

    cur.range = [acc, sortedList.length - 1 === i ? 1 : rightRange];

    return rightRange;
  }, 0);

  console.log(random);
  console.log(list);

  return sortedList.find(
    (b) => random >= b.range[0] && random <= b.range[1] && b
  );
}

console.log(getBanner(list));
