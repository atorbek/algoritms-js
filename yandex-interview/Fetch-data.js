/**
 * Дан массив ссылок, ссылки могут повторяться.
 * Необходимо реализовать скачивание по ссылкам.
 * Одновременно могут скачиваться не более пяти ссылок.
 * В случае, если ссылка уже скачана или скачивается,
 * повторное скачивание делать не нужно, результат взять из кеша.
 * Результаты вернуть в том же порядке, в котором представлены ссылки.
 */
async function fetchData(urls, limit, cb) {
  const cache = new Map();
  const result = [];
  const parallelPromise = new Set();
  let count = 0;

  while(count < urls.length) {

    while(parallelPromise.size < limit) {
      let data;
      const url = urls[count];
      const i = count;

      if(cache.has(url)) {
        data = cache.get(url);
        data.then(res => {
          result[i] = res;
        });
      } else {
        data = fetch(url);
        data.then(res => {
          result[i] = res;
          parallelPromise.delete(data);

          return res;
        });
        cache.set(url, data);
        parallelPromise.add(data);
      }

      count+=1;
    }

    await Promise.race(parallelPromise);
  }

  await Promise.allSettled(parallelPromise);

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
fetchData(urls, 5, (urls) => {
  console.log(urls);
});
console.timeEnd('time');
