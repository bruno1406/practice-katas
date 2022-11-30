// Create a function none? that accepts an array and a function, and returns true
// if the function returns true for none of the items in the array. An empty list should return true.

function none(arr, fun) {
  let result = arr.filter((item) => fun(item) === true);
  return result.length > 0 ? false : true;
}

//best solution:

// function none(arr, fun){
//     return !arr.some(fun);
//   }
