// An array is called zero-plentiful if it contains at least one 0 and every sequence
//of 0s is of length at least 4. Your task is to return the
// number of zero sequences if the given array is zero-plentiful else 0.

function zeroPlentiful(arr) {
  let sum = 0;
  let newArr = arr
    .map((item) => (item !== 0 ? "*" : item))
    .join("")
    .split("*")
    .filter((char) => /\S/.test(char));
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].length < 4) {
      return 0;
    } else {
      sum++;
    }
  }

  return sum;
}
