//https://www.codewars.com/kata/53a1eac7e0afd3ad3300008b/train/javascript
// Mutual Recursion allows us to take the fun of regular recursion (where a function calls itself until a terminating condition) and apply it to multiple functions calling each other!

// Let's use the Hofstadter Female and Male sequences to demonstrate this technique. You'll want to create two functions F and M such that the following equations are true:

// F(0) = 1
// M(0) = 0
// F(n) = n - M(F(n - 1))
// M(n) = n - F(M(n - 1))

function F(n) {
  if (n === 0) {
    return 1;
  }
  return n - M(F(n - 1));
}

function M(n) {
  if (n === 0) {
    return 0;
  } else {
    return n - F(M(n - 1));
  }
}
