function join(separator, ...numbers) {
  return numbers.reduce((acc, cur) => `${acc}` + separator + cur);
}

function join2(separator, ...numbers) {
  return numbers.join(separator);
}

console.log(join('!', 1, 0, 5, -11));
