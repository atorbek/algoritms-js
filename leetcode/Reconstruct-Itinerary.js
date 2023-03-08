const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 332,
  name: 'Reconstruct Itinerary',
  url: 'https://leetcode.com/problems/reconstruct-itinerary/',
  difficulty: difficulty.hard,
  premium: false
};

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  const dict = {};

  for (let i = 0; i < tickets.length; i++) {
    const from = tickets[i][0];
    const to = tickets[i][1];

    if (dict[from]) {
      dict[from].push(to);
    } else {
      dict[from] = [to];
    }
  }

  for (let key in dict) {
    dict[key].sort();
  }

  const res = [];

  let dfs = function (from) {
    var to = dict[from];

    while (to && to.length > 0) {
      dfs(to.shift());
    }

    res.push(from);
  };

  dfs('JFK');

  return res.reverse();
};

const label = 'time';
console.time(label);
console.log(
  findItinerary([
    ['MUC', 'LHR'],
    ['JFK', 'MUC'],
    ['SFO', 'SJC'],
    ['LHR', 'SFO']
  ])
);
console.log(
  findItinerary([
    ['JFK', 'SFO'],
    ['JFK', 'ATL'],
    ['SFO', 'ATL'],
    ['ATL', 'JFK'],
    ['ATL', 'SFO']
  ])
);
console.log(
  findItinerary([
    ['JFK', 'KUL'],
    ['JFK', 'NRT'],
    ['NRT', 'JFK']
  ])
);
console.log(
  findItinerary([
    ['EZE', 'TIA'],
    ['EZE', 'HBA'],
    ['AXA', 'TIA'],
    ['JFK', 'AXA'],
    ['ANU', 'JFK'],
    ['ADL', 'ANU'],
    ['TIA', 'AUA'],
    ['ANU', 'AUA'],
    ['ADL', 'EZE'],
    ['ADL', 'EZE'],
    ['EZE', 'ADL'],
    ['AXA', 'EZE'],
    ['AUA', 'AXA'],
    ['JFK', 'AXA'],
    ['AXA', 'AUA'],
    ['AUA', 'ADL'],
    ['ANU', 'EZE'],
    ['TIA', 'ADL'],
    ['EZE', 'ANU'],
    ['AUA', 'ANU']
  ])
);
console.timeEnd(label);
