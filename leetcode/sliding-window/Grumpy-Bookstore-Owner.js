/**
 * Today, the bookstore owner has a store open for customers.length minutes.
 * Every minute, some number of customers (customers[i]) enter the store, and all those customers
 * leave after the end of that minute.
 *
 * On some minutes, the bookstore owner is grumpy.  If the bookstore owner is grumpy on the i-th minute,
 * grumpy[i] = 1, otherwise grumpy[i] = 0. When the bookstore owner is grumpy, the customers of that minute
 * are not satisfied, otherwise they are satisfied.
 *
 * The bookstore owner knows a secret technique to keep themselves not grumpy for minutes minutes straight,
 * but can only use it once.
 *
 * Return the maximum number of customers that can be satisfied throughout the day.
 *
 * Example 1:
 *
 * Input: customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], minutes = 3
 * Output: 16
 * Explanation: The bookstore owner keeps themselves not grumpy for the last 3 minutes.
 * The maximum number of customers that can be satisfied = 1 + 1 + 1 + 1 + 7 + 5 = 16.
 *
 *
 * Note:
 *
 * 1 <= minutes <= customers.length == grumpy.length <= 20000
 * 0 <= customers[i] <= 1000
 * 0 <= grumpy[i] <= 1
 *
 */
function maxSatisfied(customers, grumpy, minutes) {
  let maxNumOfCustomers = 0;

  for (let windowEnd = 0; windowEnd < customers.length; windowEnd++) {
    if (windowEnd < customers.length - minutes) {
      if (grumpy[windowEnd] === 0) {
        maxNumOfCustomers += customers[windowEnd];
      }
    } else {
      maxNumOfCustomers += customers[windowEnd];
    }
  }

  return maxNumOfCustomers;
}

let b = new Date().getMilliseconds();
console.log(maxSatisfied([4, 10, 10], [1, 1, 0], 2));
let e = new Date().getMilliseconds();
console.log(e - b + 'ms');
