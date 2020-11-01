function allKeysAndSymbols(object) {
  let propsInArray = [];

  const getAllOwnProps = (object) => {
    if (object !== null) {
      return [
        ...propsInArray,
        ...Object.getOwnPropertyNames(object),
        ...Object.getOwnPropertySymbols(object),
        ...getAllOwnProps(Object.getPrototypeOf(object))
      ];
    }

    return propsInArray;
  };

  return getAllOwnProps(object);
}

console.log(allKeysAndSymbols({})); // ["constructor", "__defineGetter__", "__defineSetter__", "hasOwnProperty", ... ]

/* ------------------------------------------------------------------ */

const proto = { value: 42 };
const object = Object.create(proto);

Object.defineProperty(object, 'year', {
  value: 2020,
  writable: true,
  configurable: true,
  enumerable: false
});

const symbol = Symbol('bazzinga');
object[symbol] = 42;

// без proxy
console.log('value' in object); // true
console.log('year' in object); // true
console.log(symbol in object); // true

const proxy = new Proxy(object, {
  has(target, prop) {
    return target.hasOwnProperty(prop);
  }
});
// с proxy
console.log('value' in proxy); // false
console.log('year' in proxy); // true
console.log(symbol in proxy); // true

/* ------------------------------------------------------------------ */

function asyncExecutor(generator) {
  const iterator = generator();

  function next(value, isError = false) {
    const nextResult = isError ? iterator.throw(value) : iterator.next(value);
    if (nextResult.done) {
      return nextResult.value;
    }
    Promise.resolve(nextResult.value)
      .then((result) => next(result, isError))
      .catch((error) => next(error, !isError));
  }

  next();
}

// тесты
const ID = 42;
const delayMS = 1000;

function getId() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ID);
    }, delayMS);
  });
}

function getDataById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      id === ID ? resolve('x🍎') : reject('y💥');
    }, delayMS);
  });
}

asyncExecutor(function* () {
  console.time('Time');

  const id = yield getId();
  const data = yield getDataById(id);
  console.log('Data', data);

  console.timeEnd('Time');
});
