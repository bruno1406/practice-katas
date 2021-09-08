// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// Solution with for loop
function capitalize(s) {
  let arr1 = s.split("");
  let temp1 = "";
  let temp2 = "";

  for (let i = 0; i < arr1.length; i++) {
    if (i % 2 === 0) {
      temp1 += arr1[i].toUpperCase();
      temp2 += arr1[i];
    } else {
      temp2 += arr1[i].toUpperCase();
      temp1 += arr1[i];
    }
  }
  return [temp1, temp2];
}

//solution with .map
// function capitalize(s){
//     const map1 = [...s].map((x,i) => i % 2 == 0 ? x.toUpperCase() : x).join('');
//     const map2 = [...s].map((x,i) => i % 2 != 0 ? x.toUpperCase() : x).join('');

//     return [map1, map2]
//   };

//solution with forEach
// function capitalize(s){

//     const arr = s.split("")
//     let word1 = "";
//     let word2 = "";
//     arr.forEach((item, index) => {
//       index%2==0 ? word1+= item.toUpperCase() : word1+= item;
//       index%2!=0 ? word2+= item.toUpperCase() : word2+= item;
//     })

//     return [word1, word2];
//   };

console.log(capitalize("brunobarba"));
