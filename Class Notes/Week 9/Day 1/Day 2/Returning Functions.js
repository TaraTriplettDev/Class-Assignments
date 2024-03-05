// Returning functions
// Higher order functions return function as a value
const higherOrder = n => {
  const doSomething = m => {
    const doWhatever = t => {
      return 2 * n + 3 * m + t
    }
    return doWhatever
  }
  return doSomething
}
console.log(higherOrder(7)(8)(10));


//Let us see where we use call back functions. For instance the forEach method uses a call back
const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
  let sum = 0
  const callback = function(element) {
    sum += element
  }
  arr.forEach(callback) 
  return sum
}
console.log(sumArray(numbers))