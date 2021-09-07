// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"



function highAndLow(numbers){
    let high = 0;
    let low = 0;
    
    let arr = numbers.split(" ")
    
    const arrMap = arr.map(x =>  {
      
        if (high === 0) {
        high = Number(x)
      } else if (Number(x)> high) {
        high = Number(x)
      }
    
      if (low === 0) {
        low = Number(x)
      } else if (Number(x)< low) {
        low = Number(x)
      }
      
      return Number(x)
    })