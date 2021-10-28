//https://www.codewars.com/kata/57fafd0ed80daac48800019f/train/javascript

// Move all exclamation marks to the end of the sentence

// Examples
// remove("Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!!"
// remove("Hi! Hi! Hi!") === "Hi Hi Hi!!!"
// remove("Hi! !Hi Hi!") === "Hi Hi Hi!!!"
// remove("Hi! Hi!! Hi!") === "Hi Hi Hi!!!!"

function remove(s) {
  let excl = "";
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "!") {
      excl += s[i];
      s.replace(s[i], "");
    } else {
      str += s[i];
    }
  }
  str += excl;
  return str;
}
