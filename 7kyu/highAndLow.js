// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

function highAndLow(numbers) {
  let arr = numbers.split(" ");

  let high = Number(arr[0]);
  let low = Number(arr[0]);

  arr.forEach((x) => {
    if (Number(x) > high) {
      high = Number(x);
    }
    if (Number(x) < low) {
      low = Number(x);
    }
  });
  return `${high}${low}`;
}

let word = "1 2 3 4 5";

console.log(highAndLow(word));
