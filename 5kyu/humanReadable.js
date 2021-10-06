// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable(seconds) {
  let sec = (seconds % 60).toString();
  let min = (Math.floor(seconds / 60) % 60).toString();
  let hour = Math.floor(seconds / 60 / 60).toString();

  if (sec.length < 2) {
    sec = `0${sec}`;
  }
  if (min.length < 2) {
    min = `0${min}`;
  }
  if (hour.length < 2) {
    hour = `0${hour}`;
  }
  return `${hour}:${min}:${sec}`;
}

console.log(humanReadable(86399));
