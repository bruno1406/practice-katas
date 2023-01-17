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
