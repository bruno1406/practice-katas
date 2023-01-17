// It's 9 time!

// I want to count from 1 to n. How many times will I use a '9'?

// 9, 19, 91.. will contribute one '9' each, 99, 199, 919.. wil contribute two '9's each...etc

// Note: n will always be a positive integer.

// Examples (input -> output)
// 8  -> 0
// 9  -> 1
// 10 -> 1
// 98 -> 18
// 100 -> 20

function number9(n) {
  var count = 0;
  for (var i = 1; i <= n; i *= 10) {
    var curr = Math.floor(n / i);
    count += Math.floor(curr / 10) * i;
    if (curr % 10 === 9) {
      count += (n % i) + 1;
    }
  }

  return count;
  //   let arr = []
  //   let sum = 0
  // for (let i=9;i<=n;i++){
  //   arr=i.toString()
  //   for (let j=0;j<arr.length;j++){
  //     if (arr[j]==9){
  //       sum++
  //     }
  //   }
  // }
  //   return sum
}
