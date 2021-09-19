const array = [
  { foo: '1', bar: '2' },
  { baz: '1', boo: '2' }
];

function arrayToObject(array) {
  return array.reduce((acc, cur) => {
    for (let prop in cur) {
      if (cur.hasOwnProperty(prop)) {
        acc[prop] = cur[prop];
      }
    }

    return acc;
  }, {});
}

function arrayToObject1(array) {
  return array.reduce((acc, cur) => {
    return { ...acc, ...cur };
  }, {});
}

/* -------------------------------------------------------- */

const object = { foo: '1', bar: '2', _baz: '3' };

function filterObjectProps(object) {
  const ans = {};
  for (const prop in object) {
    if (object.hasOwnProperty(prop) && prop.charAt(0) !== '_') {
      ans[prop] = object[prop];
    }
  }

  return ans;
}

/* -------------------------------------------------------- */

const str1 = '[sd<cdcdcw>dcv';
const str2 = '[xsxs(sdcs)sdcs]';

function bracketValidate(str, ...brackets) {
  const set = new Set(brackets);
  let counter = 0;

  for (let c of str) {
    if (set.has(c)) {
      counter++;
    }
  }

  return counter % 2 === 0;
}

/* -------------------------------------------------------- */

const foo = { a: { b: { c: 'hello!' } } };

function getValueByObjectProps(obj, props) {
  const arrayProps = props.split('.');

  return arrayProps.reduce((acc, cur) => {
    return acc[cur];
  }, obj);
}

/* -------------------------------------------------------- */

function expand(template, data) {
  let templ = template;

  for (let prop in data) {
    if (data.hasOwnProperty(prop)) {
      templ = templ.replace(`{${prop}}`, data[prop]);
    }
  }

  return templ;
}

/* -------------------------------------------------------- */

const urls = ['url1', 'url1', 'url2', 'url3', 'url4', 'url4'];
const limit = 5;

function fetch(url) {
  return new Promise((resolve) => resolve(url)).catch((reject) =>
    reject(`error by ${url}`)
  );
}

function fetchData(urls, limit, callback) {
  const cache = new Map();
  let result = [];

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];

    if (i === limit) {
      break;
    }

    const cacheData = cache.get(url);

    if (cacheData) {
      result.push(Promise.resolve(cacheData));
    } else {
      result.push(fetch(url));
      cache.set(url, result);
    }
  }

  return callback(result);
}

fetchData(urls, limit, (urls) =>
  urls.map(async (url) => {
    console.log(await url);
  })
);

console.log(arrayToObject(array));
console.log(arrayToObject1(array));
console.log(filterObjectProps(object));
console.log(bracketValidate(str1, '[', ']', '(', ')', '<', '>'));
console.log(bracketValidate(str2, '[', ']', '(', ')', '<', '>'));
console.log(getValueByObjectProps(foo, 'a.b.c'));
console.log(h(20));
console.log(
  expand('Now {time} ascascc {foo}', { time: '14:30', foo: 'hello' })
);

/* -------------------------------------------------------- */

function countRepeatChars(str) {
  const stat = {};

  for (let c of str) {
    if (c in stat) {
      stat[c] += 1;
    } else {
      stat[c] = 0;
    }
  }

  return Object.entries(stat);
}

function countRepeatChars1(str) {
  const stat = new Map();

  for (let c of str) {
    if (stat.has(c)) {
      stat.set(c, stat.get(c) + 1);
    } else {
      stat.set(c, 0);
    }
  }

  return [...stat];
}

console.log(countRepeatChars('abcbaccdba'));
console.log(countRepeatChars1('abcbaccdba'));

/* -------------------------------------------------------- */

const arr = [10, 12, 15, 21];

for (var i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}

// work variant 1
for (var i = 0; i < arr.length; i++) {
  setTimeout(
    (function (i) {
      return function () {
        console.log('Index: ' + i + ', element: ' + arr[i]);
      };
    })(i),
    3000
  );
}

// work variant 2
for (let i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}

/* -------------------------------------------------------- */

console.log('1');

setTimeout(function () {
  console.log('2');
}, 0);

Promise.resolve().then(() => console.log('3'));

console.log('4');

function makeDroids() {
  var droids = [];

  /* test */
  for (var i = 0; i < 10; i++) {
    var droid = function () {
      console.log('R2D' + i);
    };
    droids.push(droid);
  }
  /* test */

  return droids;
}

for (let d of makeDroids()) {
  d();
}

// work variant 1
console.log('1');

setTimeout(function () {
  console.log('2');
}, 0);

Promise.resolve().then(() => console.log('3'));

console.log('4');

function makeDroids() {
  var droids = [];

  /* test */
  for (var i = 0; i < 10; i++) {
    var droid = (function (i) {
      return function () {
        console.log('R2D' + i);
      };
    })(i);
    droids.push(droid);
  }
  /* test */

  return droids;
}

for (let d of makeDroids()) {
  d();
}

// work variant 2
console.log('1');

setTimeout(function () {
  console.log('2');
}, 0);

Promise.resolve().then(() => console.log('3'));

console.log('4');

function makeDroids() {
  var droids = [];

  /* test */
  for (let i = 0; i < 10; i++) {
    var droid = function () {
      console.log('R2D' + i);
    };
    droids.push(droid);
  }
  /* test */

  return droids;
}

for (let d of makeDroids()) {
  d();
}

/* ------------------------------------------------------ */

var a = 5;
setTimeout(function timeout() {
  console.log('setTimeout' + a);
  a = 10;
}, 0);

var p = new Promise(function (resolve, reject) {
  console.log('Promise' + a);
  a = 25;
  resolve();
});

p.then(function () {
  // some code
});

console.log('final' + a);
