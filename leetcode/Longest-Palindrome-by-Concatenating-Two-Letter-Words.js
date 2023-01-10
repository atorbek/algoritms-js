const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 2131,
  name: 'Longest Palindrome by Concatenating Two Letter Words',
  url:
    'https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/',
  difficulty: difficulty.medium,
  premium: false
};

/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function (words) {
  const counter = {};

  for (let i = 0; i < words.length; i++) {
    counter[words[i]] = counter[words[i]] + 1 || 1;
  }

  let count = 0;
  let central = false;

  for (const word of Object.keys(counter)) {
    let countOfWord = counter[word];

    if (word[0] === word[1]) {
      if (counter[word] % 2 === 0) {
        count += countOfWord;
      } else {
        count += countOfWord - 1;
        central = true;
      }
    } else if (word[0] < word[1]) {
      const reversedWord = `${word[1]}${word[0]}`;

      if (counter[reversedWord]) {
        count += 2 * Math.min(countOfWord, counter[reversedWord]);
      }
    }
  }

  if (central) {
    count++;
  }

  return count * 2;
};

const label = 'time';
console.time(label);
console.log(longestPalindrome(['lc', 'cl', 'gg']));
console.log(longestPalindrome([['ab', 'ty', 'yt', 'lc', 'cl', 'ab']]));
console.log(longestPalindrome(['cc', 'll', 'xx']));
console.timeEnd(label);
