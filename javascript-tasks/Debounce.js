function debounce(func, wait) {
  let timeout;

  return function (...args) {
    const funcCall = func.bind(this, ...args);

    clearTimeout(timeout);

    timeout = setTimeout(funcCall, wait);
  }
}


function onChange(value) {
  console.log(value);
}

let f = debounce(onChange, 1000);

console.time('time');
console.log(f('a'));
console.log(f('ab'));
console.log(f('abc'));
console.log(f('abcd'));
console.timeEnd('time');
