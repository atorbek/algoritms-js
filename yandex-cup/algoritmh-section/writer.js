const fs = require('fs');

function writer(str) {
  let count = 0;

  if (str === str.toUpperCase()) {
    return str.length + 2;
  }

  [...str].forEach((c) => {
    if (c === ' ') {
      count += 1;
    } else {
      if (c === c.toUpperCase()) {
        count += 2;
      }

      if (c === c.toLowerCase()) {
        count += 1;
      }
    }
  });

  return count;
}

fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    throw err;
  }

  const res = writer(data);
  console.log(res);

  fs.writeFile('output.txt', res, (err) => {
    if (err) throw err;
  });
});
