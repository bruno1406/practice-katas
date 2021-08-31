// Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"

function getDrinkByProfession(param) {
  const obj = {
    jabroni: "Patron Tequila",
    schoolcounselor: "Anything with Alcohol",
    programmer: "Hipster Craft Beer",
    bikegangmember: "Moonshine",
    politician: "Your tax dollars",
    rapper: "Cristal",
    all: "Beer",
  };
  let profession = param.toLowerCase().split(" ").join("");
  if (obj[profession]) {
    return obj[profession];
  } else {
    return obj.all;
  }
}
