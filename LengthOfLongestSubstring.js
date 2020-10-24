/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  let tmp1 = '';
  let tmp2 = '';

  const arrS = [...s];

  for (let i = 0; i < arrS.length; i++) {
    if (tmp2.includes(arrS[i])) {
      if (tmp2.length > tmp1.length) {
        tmp1 = tmp2;
      }

      tmp2 = '';
    }

    tmp2 += arrS[i];
  }

  if (tmp2.length > tmp1.length) {
    tmp1 = tmp2;
  }

  return tmp1.length;
};

console.log(lengthOfLongestSubstring('dvdf'));
