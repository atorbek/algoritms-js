function TransformArray2(arr) {

  arr = arr.sort((a, b) => a - b);

  let l = 0;

  let result = '';
  while (l < arr.length) {

    if (l + 1 === arr.length) {
      result += arr[l];
      break;
    }

    const diff = arr[l + 1] - arr[l];

    if (diff > 1) {
      result += arr[l] + ',';
      l += 1;
      continue;
    }

    result += arr[l] + '-';

    while (arr[l + 1] - arr[l] === 1) {
      l += 1;
    }

    result += arr[l];
    if (l + 1 < arr.length) {
      result += ',';
    }

    l += 1;

  }


  return result;
}

const arr = [-5, -4, -1, 1, 2, 3, 4, 5, 8, 10];
console.time('time');
console.log(TransformArray2(arr));
console.timeEnd('time');

//  3 2 1 5 6 -1 10


// -1 1 2 3 5 6 10
//l              ^
//r                ^

// -1,1-3,5-6,

//  0 1 2 3 4  5 6

// -1,1-3,5-6,10
