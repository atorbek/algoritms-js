function any(promises) {
  return new Promise((resolve, reject) => {
    let resolutions = [];

    if (!promises[global.Symbol && Symbol.iterator] || !Array.isArray(promises)) {
      reject("values isn't iterable object");
    }

    let count = promises.length;
    if (!count) {
      resolve(resolutions);
    }

    promises.forEach((value, i) => {
      Promise.resolve(value)
        .then(value => {
          resolve(value);
        })
        .catch(reason => {
          resolutions[i] = reason;
          if (--count === 0) {
            reject(resolutions);
          }
        })
    })

  })
}


const promise1 = Promise.resolve(1);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 2));
const promise3 = Promise.reject(3);
const promise4 = new Promise((resolve) => setTimeout(resolve, 100, 4));
const promise5 = Promise.resolve(5);


console.time('time');
any([promise2, promise3]).then(res => console.log(res));
console.timeEnd('time');
