const segments = [
  'GREEN',
  'GREEN',
  'RED',
  'GREEN',
  'YELLOW',
  'RED',
  'GREEN',
  'YELLOW',
  'RED',
  'YELLOW'
];
const width = 5;

function thermometerPlugs(segments, width) {
  let colorWeightObj = {
    GREEN: 3,
    YELLOW: 2,
    RED: 1
  };

  const chunkSize = segments.length / width;
  let newSegments = [];

  for (let i = 0; i < width; i++) {
    const chunk = segments
      .slice(i * chunkSize, (i + 1) * chunkSize)
      .sort((a, b) => colorWeightObj[a] - colorWeightObj[b]);

    newSegments.push(chunk[Math.floor(chunk.length - 1 / 2)]);
  }

  return newSegments;
}

thermometerPlugs(segments, width);

const a = {
  chunkCount: 3,
  emitter: {
    on: (fn) => {
      fn({ id: 5314, data: 'The Good, ', timestamp: new Date('2019-01-01') });
      fn({ id: 1543, data: 'd the Ugly', timestamp: new Date('2019-01-03') });
      fn({ id: 2494, data: 'the Bad an', timestamp: new Date('2019-01-02') });
    }
  }
};
