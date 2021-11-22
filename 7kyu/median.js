//https://www.codewars.com/kata/5864eb8039c5ab9cd400005c/train/javascript

// Your non-profit company has assigned you the task of calculating some simple statistics on donations. You have an array of integers, representing various amounts of donations your company has been given. In particular, you're interested in the median value for donations.

// The median is the middle number of a sorted list of numbers. If the list is of even length, the 2 middle values are averaged.

// Write a function that takes an array of integers as an argument and returns the median of those integers.

// Note:
// The sorting step is vital.

// Examples
// Median of [33,99,100,30,29,50] is 41.5.
// Median of 3,2,1] is 2.

function median(array) {
  array.sort(function (a, b) {
    return a - b;
  });
  let median = 0;
  if (array.length % 2 == 0) {
    median = (array[array.length / 2] + array[array.length / 2 - 1]) / 2;
  } else {
    median = array[Math.floor(array.length / 2)];
  }
  return median;
}
