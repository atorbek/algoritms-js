/**
 * Given two strings s and t, return true if they are equal when both are typed into empty text editors.
 * '#' means a backspace character.
 *
 * Note that after backspacing an empty text, the text will continue empty.
 *
 * Example 1:
 *
 * Input: s = "ab#c", t = "ad#c"
 * Output: true
 * Explanation: Both s and t become "ac".
 *
 * Example 2:
 *
 * Input: s = "ab##", t = "c#d#"
 * Output: true
 * Explanation: Both s and t become "".
 *
 * Example 3:
 *
 * Input: s = "a##c", t = "#a#c"
 * Output: true
 * Explanation: Both s and t become "c".
 *
 * Example 4:
 *
 * Input: s = "a#c", t = "b"
 * Output: false
 * Explanation: s becomes "c" while t becomes "b".
 *
 *
 * Constraints:
 *
 * 1 <= s.length, t.length <= 200
 * s and t only contain lowercase letters and '#' characters.
 *
 *
 * Follow up: Can you solve it in O(n) time and O(1) space?
 **/
function backspaceCompare1(s, t) {
  let i = 0;
  let j = 0;
  let len1 = s.length;
  let len2 = t.length;

  while (i < len1 || j < len2) {
    if (s[i] === '#') {
      s = s.substring(0, i - 1) + s.substring(i + 1, s.length);
      len1 = s.length;
      i--;
    } else {
      i++;
    }

    if (t[j] === '#') {
      t = t.substring(0, j - 1) + t.substring(j + 1, t.length);
      len2 = t.length;
      j--;
    } else {
      j++;
    }
  }

  return s === t;
}

function findDuplicate(s, t) {
  let i = s.length - 1;
  let j = t.length - 1;
  let skipS = 0;
  let skipT = 0;

  while (i >= 0 || j >= 0) {
    while (i >= 0) {
      if (s[i] === '#') {
        skipS++;
        i--;
      } else if (skipS > 0) {
        skipS--;
        i--;
      } else {
        break;
      }
    }

    while (j >= 0) {
      if (t[j] === '#') {
        skipT++;
        j--;
      } else if (skipT > 0) {
        skipT--;
        j--;
      } else {
        break;
      }
    }

    if (i >= 0 && j >= 0 && s[i] !== t[j]) {
      return false;
    }

    if (i >= 0 !== j >= 0) {
      return false;
    }

    i--;
    j--;
  }

  return true;
}

let b = new Date().getMilliseconds();
console.log(backspaceCompare2('xywrrmp', 'xywrrmu#p'));
let e = new Date().getMilliseconds();
console.log(e - b + 'ms');
