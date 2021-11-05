function allSettled(promises) {
  const catchedPromises = promises.map((p) =>
    Promise.resolve(p)
      .then((value) => ({
        status: 'fulfilled',
        value
      }))
      .catch((reason) => ({
        status: 'rejected',
        reason
      }))
  );

  return Promise.all(catchedPromises);
}

const promise1 = Promise.resolve(1);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 2));
const promise3 = Promise.reject(3);
const promise4 = new Promise((resolve) => setTimeout(resolve, 100, 4));
const promise5 = Promise.resolve(5);

console.time('time');
allSettled([promise1, promise2, promise3, promise4, promise5]).then((res) =>
  console.log(res)
);
console.timeEnd('time');
