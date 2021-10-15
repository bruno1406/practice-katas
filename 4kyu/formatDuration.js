// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// formatDuration(62)    // returns "1 minute and 2 seconds"
// formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"

function formatDuration(seconds) {
  let obj = {
    year: Math.floor(seconds / 31536000),
    day: Math.floor(seconds / 86400) % 365,
    hour: Math.floor(seconds / 3600) % 24,
    minute: Math.floor(seconds / 60) % 60,
    second: seconds % 60,
  };
  let word = [];
  let objCount = Object.keys(obj).length;
  let result = "";
  for (const prop in obj) {
    if (obj[prop] === 1) {
      word.push(`${obj[prop]} ${prop}`);
    } else if (obj[prop] > 1) {
      word.push(`${obj[prop]} ${prop}s`);
    }
  }

  for (let i = 0; i < word.length; i++) {}
  if (word.length === 0) {
    return "now";
  } else if (word.length === 1) {
    return word.join("");
  } else if (word.length === 2) {
    return word.join(" and ");
  } else if (word.length === 3) {
    return `${word[0]}, ${word[1]} and ${word[2]}`;
  } else if (word.length === 4) {
    return `${word[0]}, ${word[1]}, ${word[2]} and ${word[3]}`;
  } else if (word.length === 5) {
    return `${word[0]}, ${word[1]}, ${word[2]}, ${word[3]} and ${word[4]}`;
  }
}
