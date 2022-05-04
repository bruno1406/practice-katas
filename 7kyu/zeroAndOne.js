//https://www.codewars.com/kata/58ad09d6154165a1c80000d1/train/javascript

// You have a string that consists of zeroes and ones. Now choose any two adjacent positions in the string: if one of them is 0, and the other one is 1, remove these two digits from the string.

// Return the length of the resulting (smallest) string that you can get after applying this operation multiple times?

// Note: after each operation, the remaining digits are separated by spaces and thus not adjacent anymore - see the examples below.

// Examples
// For "01010" the result should be 1:

// "01010"  -->  "  010"  -->  "    0"
// For "110100" the result should be 2:

// "110100"  -->  "1  100"  -->  "1    0"

function zeroAndOne(s) {
  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] === " ") {
      continue;
    }
    if (s[i] !== s[i - 1]) {
      s = replaceChar(s, " ", i);
      s = replaceChar(s, " ", i - 1);
    }
  }
  return s.length - (s.match(/ /g) || []).length;
}

function replaceChar(origString, replaceChar, index) {
  let firstPart = origString.substr(0, index);
  let lastPart = origString.substr(index + 1);

  let newString = firstPart + replaceChar + lastPart;
  return newString;
}

//One liner

function zeroAndOne(s) {
  return s.replace(/(10|01)/g, "").length;
}
