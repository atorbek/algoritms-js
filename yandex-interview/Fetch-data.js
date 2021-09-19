/**
 * Дан массив ссылок, ссылки могут повторяться.
 * Необходимо реализовать скачивание по ссылкам.
 * Одновременно могут скачиваться не более пяти ссылок.
 * В случае, если ссылка уже скачана или скачивается,
 * повторное скачивание делать не нужно, результат взять из кеша.
 * Результаты вернуть в том же порядке, в котором представлены ссылки.
 */
async function tryAuth(urls, limit, cb) {
  let cache = new Map();
  const result = [];
  const promises = new Set();
  let i = 0;

  try {
    while (i < urls.length) {
      while (promises.size < limit) {
        const url = urls[i];
        let fetchedData;
        const self = i;

        if (cache.has(url)) {
          fetchedData = cache.get(url);
        } else {

          fetchedData = fetch(url);
          cache.set(url, fetchedData);
          promises.add(fetchedData);
        }

        fetchedData.then(() => {
          // console.log('delete ' + self);
          promises.delete(fetchedData);
        });

        result[i] = fetchedData;
        // console.log('Iteration ' + i);

        i += 1;
      }

      await Promise.race(promises);
    }

    await Promise.allSettled(promises);

  } catch (error) {
    console.log(error);
  }

  return cb(result);
}

function fetch(url) {
  return new Promise((resolve) => {
    setTimeout(resolve, Math.random() * (1000 - 0) + 0, url);
  }).catch((reject) => reject(`error by ${url}`));
}

const urls = [
  'url1',
  'url2',
  'url3',
  'url4',
  'url5',
  'url1',
  'url2',
  'url6',
  'url7',
  'url8',
  'url9'
];
console.time('time');
console.log(tryAuth(urls, 5, async (urls) => {
  urls.map((url) => console.log(url))
}));
console.timeEnd('time');
