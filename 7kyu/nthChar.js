// Complete the function that takes an array of words.

// You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list.

// For example:

// ["yoda", "best", "has"]  -->  "yes"
//   ^        ^        ^
//   n=0     n=1     n=2

function nthChar(words) {
  let word = "";
  for (let i = 0; i < words.length; i++) {
    word += words[i][i];
  }
  return word;
}
