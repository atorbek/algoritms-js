const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 567,
  name: 'Permutation in String',
  url: 'https://leetcode.com/problems/permutation-in-string/',
  difficulty: difficulty.medium,
  premium: false
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusionHashMap = function (s1, s2) {
  function matches(obj1, obj2) {
    for (let [key] of Object.entries(obj1)) {
      if (obj1[key] - obj2[key] !== 0) {
        return false;
      }
    }

    return true;
  }

  if (s1.length > s2.length) {
    return false;
  }

  let s1map = {};

  for (let i = 0; i < s1.length; i++) {
    // O(n)
    s1map[s1.charCodeAt(i)] = s1map[s1.charCodeAt(i)] + 1 || 0;
  }

  for (i = 0; i <= s2.length - s1.length; i++) {
    let s2map = {};

    for (j = 0; j < s1.length; j++) {
      s2map[s2.charCodeAt(i + j)] = s2map[s2.charCodeAt(i + j)] + 1 || 0;
    }

    if (matches(s1map, s2map)) {
      return true;
    }
  }

  return false;
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusionArray = function (s1, s2) {
  function matches(arr1, arr2) {
    for (let i = 0; i < 26; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }

    return true;
  }

  if (s1.length > s2.length) {
    return false;
  }

  let s1map = [];

  for (let i = 0; i < s1.length; i++) {
    // n
    s1map[s1.charCodeAt(i) - 'a'.charCodeAt(0)] =
      s1map[s1.charCodeAt(i) - 'a'.charCodeAt(0)] + 1 || 0;
  }

  for (let i = 0; i <= s2.length - s1.length; i++) {
    // n
    let s2map = [];

    for (let j = 0; j < s1.length; j++) {
      // n
      s2map[s2.charCodeAt(i + j) - 'a'.charCodeAt(0)] =
        s2map[s2.charCodeAt(i + j) - 'a'.charCodeAt(0)] + 1 || 0;
    }

    if (matches(s1map, s2map)) {
      // n
      return true;
    }
  }

  return false;
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusionArraySlideWindow = function (s1, s2) {
  function matches(arr1, arr2) {
    for (let i = 0; i < 26; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }

    return true;
  }

  if (s1.length > s2.length) {
    return false;
  }

  let s1map = new Array(26).fill(0);
  let s2map = new Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    // n
    s1map[s1.charCodeAt(i) - 'a'.charCodeAt(0)] =
      s1map[s1.charCodeAt(i) - 'a'.charCodeAt(0)] + 1;
    s2map[s2.charCodeAt(i) - 'a'.charCodeAt(0)] =
      s2map[s2.charCodeAt(i) - 'a'.charCodeAt(0)] + 1;
  }

  for (let i = 0; i < s2.length - s1.length; i++) {
    // n

    if (matches(s1map, s2map)) {
      // n

      return true;
    }

    s2map[s2.charCodeAt(i + s1.length) - 'a'.charCodeAt(0)] =
      s2map[s2.charCodeAt(i + s1.length) - 'a'.charCodeAt(0)] + 1;

    s2map[s2.charCodeAt(i) - 'a'.charCodeAt(0)] =
      s2map[s2.charCodeAt(i) - 'a'.charCodeAt(0)] - 1;
  }

  return matches(s1map, s2map);
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusionOptimizedSlidingWindow = function (s1, s2) {
  if (s1.length > s2.length) {
    return false;
  }

  let s1Arr = new Array(26).fill(0);
  let s2Arr = new Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    // n
    s1Arr[s1.charCodeAt(i) - 'a'.charCodeAt(0)] =
      s1Arr[s1.charCodeAt(i) - 'a'.charCodeAt(0)] + 1;
    s2Arr[s2.charCodeAt(i) - 'a'.charCodeAt(0)] =
      s2Arr[s2.charCodeAt(i) - 'a'.charCodeAt(0)] + 1;
  }

  let count = 0;
  for (let i = 0; i < 26; i++) {
    if (s1Arr[i] === s2Arr[i]) {
      count++;
    }
  }

  for (let i = 0; i < s2.length - s1.length; i++) {
    let r = s2.charCodeAt(i + s1.length) - 'a'.charCodeAt(0);
    let l = s2.charCodeAt(i) - 'a'.charCodeAt(0);

    if (count === 26) {
      return true;
    }

    s2Arr[r] += 1;

    if (s2Arr[r] === s1Arr[r]) {
      count++;
    } else if (s2Arr[r] === s1Arr[r] + 1) {
      count--;
    }

    s2Arr[l] -= 1;

    if (s2Arr[l] === s1Arr[l]) {
      count++;
    } else if (s2Arr[l] === s1Arr[l] - 1) {
      count--;
    }
  }

  return count === 26;
};

console.time('time');
console.log(checkInclusionHashMap('ab', 'eidbaooo'));
console.log(checkInclusionHashMap('ab', 'eidboaoo'));
console.log(checkInclusionArray('ab', 'eidbaooo'));
console.log(checkInclusionArray('ab', 'eidboaoo'));
console.log(checkInclusionArraySlideWindow('ab', 'eidbaooo'));
console.log(checkInclusionArraySlideWindow('ab', 'eidboaoo'));
console.log(checkInclusionOptimizedSlidingWindow('ab', 'eidbaooo'));
console.log(checkInclusionOptimizedSlidingWindow('ab', 'eidboaoo'));
console.timeEnd('time');
