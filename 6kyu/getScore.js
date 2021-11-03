//https://www.codewars.com/kata/5254bd1357d59fbbe90001ec/train/javascript

// Have a look at the following numbers.

//  n | score
// ---+-------
//  1 |  50
//  2 |  150
//  3 |  300
//  4 |  500
//  5 |  750
// Can you find a pattern in it? If so, then write a function getScore(n)/get_score(n)/GetScore(n) which returns the score for any positive number n:

// int getScore(1) = return 50;
// int getScore(2) = return 150;
// int getScore(3) = return 300;
// int getScore(4) = return 500;
// int getScore(5) = return 750;

function getScore(n) {
  let sum = 0;
  for (let i = n; i > 0; i--) {
    console.log(i);
    sum += i;
  }
  return 50 * sum;
}
