const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 920,
  name: 'Meeting Rooms',
  url: 'https://leetcode.com/problems/meeting-rooms/',
  difficulty: difficulty.easy,
  premium: false
};

/**
 * 252. Meeting Rooms
 * Given an array of meeting time intervals consisting of start and
 * end times[[s1,e1],[s2,e2],...](si< ei), determine if a person could attend all meetings.
 *
 * Example 1:
 *
 * Input:
 * [[0,30],[5,10],[15,20]]
 * Output: false
 *
 * Example 2:
 *
 * Input:[[7,10],[2,4]]
 *
 *
 * Output:true
 **/
function merge(intervals) {
  const sortedIntervals = intervals.sort((a, b) => a[1] - b[0]);

  return true;
}

intervals = [
  [7, 10],
  [2, 4]
];

let b = new Date().getMilliseconds();
console.log(merge(intervals));
let e = new Date().getMilliseconds();
console.log(e - b + 'ms');
