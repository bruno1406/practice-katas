// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// formatDuration(62)    // returns "1 minute and 2 seconds"
// formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"

function formatDuration(seconds) {                        |
  const yearsToSeconds = [
    Math.floor(seconds / 31536000), //year
    Math.floor(seconds / 86400) % 365, //day
    Math.floor(seconds / 3600) % 24, //hour
    Math.floor(seconds / 60) % 60, //min
    seconds % 60, //seconds
  ];

  for (let i = 0; i < yearsToSeconds.length; i++) {}
  console.log(yearsToSeconds[4]);
}
