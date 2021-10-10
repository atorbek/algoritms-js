
function sumOfTwo(arr, target) {

  const dict = {};

  arr.forEach((elem, i) => {
    dict[elem] = i;
  });

  for (let i = 0; i < arr.length; i++) {

    diff = target - arr[i];

    if (dict[diff] && dict[diff] !== i) {
      return [i, dict[diff]];
    }

  }
  return [];

}



console.time('time');
console.log(sumOfTwo([3, 2, 4], 6));
console.timeEnd('time');

// 3 2 4 => 6
//       ^
//         ^

// 6 - 4 = 2

// 3 4 2
// 0 1 2
