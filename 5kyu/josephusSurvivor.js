//https://www.codewars.com/kata/555624b601231dc7a400017a/train/javascript

// In this kata you have to correctly return who is the "survivor", ie: the last element of a Josephus permutation.

// Basically you have to assume that n people are put into a circle and that they are eliminated in steps of k elements, like this:

// josephus_survivor(7,3) => means 7 people in a circle;
// one every 3 is eliminated until one remains
// [1,2,3,4,5,6,7] - initial sequence
// [1,2,4,5,6,7] => 3 is counted out
// [1,2,4,5,7] => 6 is counted out
// [1,4,5,7] => 2 is counted out
// [1,4,5] => 7 is counted out
// [1,4] => 5 is counted out
// [4] => 1 counted out, 4 is the last element - the survivor!

function josephusSurvivor(n, k) {
  let items = [];
  for (let i = 1; i <= n; i++) {
    items.push(i);
  }
  let arr = [];
  let num = items.length;
  let sum = 0;

  for (let i = 0; i < num; i++) {
    sum = (sum + k - 1) % items.length;
    arr.push(items[sum]);
    items.splice(sum, 1);
  }

  return arr[arr.length - 1];
}
