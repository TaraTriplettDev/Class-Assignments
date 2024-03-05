// Reduce takes a callback function. The call back function takes an accumulator, current value, and an optional initial value as its parameters and return a single value.

// Basic syntax 
// arr.reduce((acc, curr) => {
  // code goes here
// return
// }, initialValue)

// example

const numbers = [1, 3, 4, 5, 6]
const sum = numbers.reduce((acc, cur) => acc + cur, 0)

console.log(sum)
