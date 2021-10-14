// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

function rowWeights(array) {
  let arr1 = array.filter((item, i) => i % 2 === 0);
  let arr2 = array.filter((item, i) => i % 2 !== 0);
  return [
    arr1.reduce((acc, curr) => acc + curr, 0),
    arr2.reduce((acc, curr) => acc + curr, 0),
  ];
}
