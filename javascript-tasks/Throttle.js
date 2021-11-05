function throttle(func, wait) {
  let isThrottled = false;
  let savedArgs;
  let savedThis;

  function wrapper(...args) {
    if (isThrottled) {
      savedArgs = args;
      savedThis = this;
      return;
    }

    func.apply(this, args);

    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = null;
        savedThis = null;
      }
    }, wait);
  }

  return wrapper;
}

function onChange(value) {
  console.log(value);
}

let f = throttle(onChange, 3000);

let timerId = setInterval(() => {
  f(new Date());
}, 1000);

setTimeout(() => {
  clearTimeout(timerId);
}, 9000);

console.time('time');
console.timeEnd('time');
