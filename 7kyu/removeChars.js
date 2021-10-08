// Let's assume we need "clean" strings. Clean means a string should only contain letters a-z, A-Z and spaces. We assume that there are no double spaces or line breaks.

// Write a function that takes a string and returns a string without the unnecessary characters.

// Examples
// removeChars('.tree1')    ==> 'tree'

// removeChars("that's a pie$ce o_f p#ie!")  ==> 'thats a piece of pie'

function removeChars(s) {
  return s
    .split(" ")
    .map((word) =>
      word
        .split("")
        .filter((letter) => (/[a-zA-Z]/.test(letter) ? letter : ""))
        .join("")
    )
    .join(" ");
}

console.log(removeChars(`that's a pie$ce o_f p#ie`));
