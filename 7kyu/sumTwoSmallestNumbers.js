function sumTwoSmallestNumbers(numbers) {
  let min = Math.min(...numbers);

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === min) {
      numbers.splice(i, 1);
      break;
    }
  }

  let min1 = Math.min(...numbers);

  return min + min1;
}

let num = [5, 7, 6, 80, 10, 5];

console.log(sumTwoSmallestNumbers(num));
