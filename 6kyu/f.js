//https://www.codewars.com/kata/5491689aff74b9b292000334/train/javascript

// For a given nonempty string s find a minimum substring t and the maximum number k, such that the entire string s is equal to t repeated k times. The input string consists of lowercase latin letters. Your function should return a tuple (in Python) (t, k) or an array (in Ruby and JavaScript) [t, k]
// Example #1:
// for string
// s = "ababab";
// the answer is
// ["ab", 3]

function f(s) {
  let m = s.match(/^(.*?)\1+$/);
  return m ? [m[1], s.length / m[1].length] : [s, 1];
}

//other one

// function f(s) {
//     let sequence = '';
//   let reg = new RegExp(`${sequence}`, 'g');
//   let i = 0;
//   while(s.match(reg).join('') !== s && i < s.length) {
//     sequence += s[i];
//     reg = new RegExp(`${sequence}`, 'g');
//     i++;
//   }

//   return [s.match(reg)[0], s.match(reg).length]
// }
