//https://www.codewars.com/kata/5710a50d336aed828100055a/train/javascript

// Task:
// John is a worker, His job is to remove screws from a machine.

// There are 2 types of screws :

// slotted : '-'
// cross : '+'
// The input will be a string of screws, e.g. : "---+++"

// John has 2 screwdrivers, one for each type of screw.

// When John begins to work, he stands at the first screw, with a screwdriver in his hand (he is always holding a screwdriver that can screw out the first one), and another in his tool kit.

// He works from left to right, removing the screws. When necessary, he switches between the screwdriver in his hand and the one in his tool kit.

// Each action takes a set amount of time:

// remove one screw :               1 second
// move to the next screw:          1 second
// swap screwdrivers:               5 seconds
// Your task is to return the total time taken to remove all the screws, in seconds.

function sc(screws) {
  let sum = 0;
  for (let i = 1; i < screws.length; i++) {
    if (screws[i] !== screws[i - 1]) {
      sum += 5;
    }
  }
  return sum + screws.length * 2 - 1;
}
