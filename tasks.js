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

const foo = { a: { b: { c: 'hello!' } } };

function getValueByObjectProps(obj, props) {
  const arrayProps = props.split('.');

  return arrayProps.reduce((acc, cur) => {
    return acc[cur];
  }, obj);
}

const g = (n) => n + 1;
const f = (n) => n * 2;

function compose(...fns) {
  return (x) => fns.reduceRight((acc, cur) => cur(acc), x);
}

const h = compose(g, f);

function expand(template, data) {
  let templ = template;

  for (let prop in data) {
    if (data.hasOwnProperty(prop)) {
      templ = templ.replace(`{${prop}}`, data[prop]);
    }
  }

  return templ;
}

function intervals(arr) {
  if (!arr.length) {
    return '';
  }
  let fl = 0;
  const arrSorted = arr.sort((a, b) => a - b);
  let res = '';

  for (let i = 1; i < arrSorted.length; i++) {
    if (Math.abs(arrSorted[i] - arrSorted[i - 1]) > 1) {
      fl = 0;
      res += `${arrSorted[i - 1]},`;
    } else {
      if (fl === 0) {
        res += `${arrSorted[i - 1]}-`;
        fl = 1;
      }
    }
  }

  res += `${arrSorted[arrSorted.length - 1]}`;

  return res;
}

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

console.log(intervals([3, 2, 1, 5, 6, -1, 10]));
