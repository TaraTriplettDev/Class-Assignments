/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/

function fizzy(n) {
  if (n % 3 === 0 && n % 5 != 0) {
    return "Fizz"
  } else if (n % 3 != 0 && n % 5 === 0) {
    return "Buzz"
  } else if (n % 3 === 0 && n % 5 === 0) {
    return "FizzBuzz"
  } else if (n % 3 != 0 && n % 5 != 0) {
    return n
  }
}


/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/


if (typeof fizzy === "undefined") {
  fizzy = undefined;
}

module.exports = {
  fizzy,
};
