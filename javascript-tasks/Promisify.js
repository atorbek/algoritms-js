const promisify = (f) => (...args) => {
  return new Promise((resolve) => {
    const cb = (result) => {
      resolve(result);
    };

    f(...args, cb);
  });
};

const f = () => 1;
promisify(f);
