/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 *
 * An input string is valid if:
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 *
 *
 * Example 1:
 *
 * Input: s = "()"
 * Output: true
 * Example 2:
 *
 * Input: s = "()[]{}"
 * Output: true
 * Example 3:
 *
 * Input: s = "(]"
 * Output: false
 * Example 4:
 *
 * Input: s = "([)]"
 * Output: false
 * Example 5:
 *
 * Input: s = "{[]}"
 * Output: true
 *
 *
 * Constraints:
 *
 * 1 <= s.length <= 104
 * s consists of parentheses only '()[]{}'.
 *
 */
function isValid(s) {
  const stack = [];

  const brackets = {
    ')': '(',
    '}': '{',
    ']': '['
  }

  for (let i = 0; i < s.length; i++) {
    const current = s[i];

    if (isClosedBrackets(current)) {
      if (brackets[current] !== stack.pop()) {
        return false;
      }
    } else {
      stack.push(current);
    }

  }
  return stack.length === 0;

}

function isClosedBrackets(c) {
  return [')', ']', '}'].includes(c);
}

const s1 = "([)]";
const s2 = "()[]{}";
const s3 = "(]";
console.time('time');
console.log(s1, isValid(s1));
console.log(s2, isValid(s2));
console.log(s3, isValid(s3));
console.timeEnd('time');
