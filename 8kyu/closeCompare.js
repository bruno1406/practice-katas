// Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b.

// a is considered "close to" b if margin is greater than or equal to the distance between a and b.

function closeCompare(a, b, margin) {
  if (!margin) {
    margin = 0;
  }

  let sum = a - b;
  if (sum < 0) {
    sum *= -1;
  }

  if (sum <= margin) {
    console.log("1  a", a, "b", b, "margin", margin);
    return 0;
  } else if (a < b) {
    return -1;
  } else {
    console.log("2  a", a, "b", b, "margin", margin);
    return 1;
  }
}
