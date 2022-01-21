//https://www.codewars.com/kata/590942d4efde93886900185a/train/javascript

// Input/Output
// [input] string score

// A string in the format <p1>-<p2> representing a valid score, where <p1> is the first player's score, and <p2> is the second player's score.

// [output] an integer

// The number of points won so far.

// Example
// For score = "15-40", the output should be 4.

// The first player won 1 point, and the second 3, so 1 + 3 = 4 points have been won.

// For score = "30-all", the output should be 4.

// The players have won 2 points each.

function tennisGamePoints(score) {
  let arr = score.split("-");
  let score1 = arr[0];
  let score2 = arr[1];

  if (score1 === "love") {
    score1 = 0;
  } else {
    score1 = Math.ceil(score1 / 15);
  }

  if (score2 == "all") {
    score2 = score1;
  } else if (score2 === "love") {
    score2 = 0;
  } else {
    score2 = Math.ceil(score2 / 15);
  }

  return score1 + score2;
}
