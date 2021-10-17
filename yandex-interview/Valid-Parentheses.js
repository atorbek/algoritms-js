function isValid(s) {
  const stack = [];

  brackets = {
    ']': '[',
    ')': '(',
    '}': '{',
    '>': '<'
  };

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];

    if (isClosedBrackets(currentChar)) {
      if (stack.pop() !== brackets[currentChar]) {
        return false;
      }
    } else if (isOpenBrackets(currentChar)) {
      stack.push(currentChar);
    }
  }

  return stack.length === 0;
}

function isOpenBrackets(c) {
  return ['(', '[', '{', '<'].includes(c);
}

function isClosedBrackets(c) {
  return [')', ']', '}', '>'].includes(c);
}

const s1 = '([)]'; // false
const s2 = '()[]{}'; // true
const s3 = '(]'; // false
const s4 = '[sd<cdcdcw>dcv'; // false
const s5 = '[xsxs(sdcs)sdcs]'; // true
const s6 = '[xsxs(sdcs)s(dcs]'; // false
console.time('time');
console.log(s1, isValid(s1));
console.log(s2, isValid(s2));
console.log(s3, isValid(s3));
console.log(s4, isValid(s4));
console.log(s5, isValid(s5));
console.log(s6, isValid(s6));
console.timeEnd('time');
