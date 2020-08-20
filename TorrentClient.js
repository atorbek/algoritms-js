const obj = {
  chunkCount: 3,
  emitter: {
    on: (fn) => {
      fn({ id: 5314, data: 'The Good, ', timestamp: new Date('2019-01-01') });
      fn({ id: 1543, data: 'd the Ugly', timestamp: new Date('2019-01-03') });
      fn({ id: 2494, data: 'the Bad an', timestamp: new Date('2019-01-02') });
    }
  }
};

const objWithError = {
  chunkCount: 1,
  emitter: {
    on: (fn) => {
      fn({ id: 0, data: 'hello', timestamp: new Date('2019-01-01') });
      fn({ id: 0, data: 'world', timestamp: new Date('2019-01-02') });
    }
  }
};

const objWithTimeout = { chunkCount: 2, emitter: { on: (fn) => {} } };

function torrentClient({ chunkCount, emitter: { on } }) {
  return new Promise((resolve, reject) => {
    const chunks = {};
    let chunksDownloaded = 0;
    on(({ id, data, timestamp }) => {
      if (id in chunks) {
        reject(`Duplicate id: ${id}`);
      }
      chunks[id] = { data, timestamp };
      chunksDownloaded += 1;

      if (chunksDownloaded === chunkCount) {
        const text = Object.values(chunks)
          .sort((a, b) => a.timestamp - b.timestamp)
          .reduce((acc, cur) => acc + cur.data, '');
        resolve(text);
      }
    });

    setTimeout(() => {
      reject('Timed out');
    }, 1000);
  });
}

console.log(torrentClient(objWithError));
