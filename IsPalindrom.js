function isPalindrom(str) {
  const strLowerCase = str.toLowerCase().replace(/[^a-zа-я]/g, '');

  console.log(strLowerCase);
  console.log([...strLowerCase].reverse().join(''));

  return strLowerCase === [...strLowerCase].reverse().join('');
}

console.log(isPalindrom('Eva, can I see bees in a cave?'));
