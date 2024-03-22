// Exercise 1
// Display the countries array as a table
// Display the countries object as a table
// Use console.group() to group logs


// Array as a table

// const countries = [
//   ['America', 'Britain'],
//   ['China', 'Denmark'],
//   ['Ethiopia', 'France']
// ]

// console.table(countries);


// Object as a table

// const Junpei = {
//   name: 'Junpei',
//   age: 21,
//   likes: 'Akane',
//   dislikes: 'drowning'
// }

// console.table(Junpei)


// Grouping Logs

// const fudgeSundae = 'Fudge Sundae'
// const flavors = ['Rocky Road', 'Moose Tracks', 'Cookies and Cream']

// console.group('iceCream')
// console.log(fudgeSundae)
// console.log(flavors)
// console.groupEnd

// Exercise 2
// 10 > 2 * 10 
// use console.assert()
// Write a warning message using console.warn()
// Write an error message using console.error()

console.assert(10 > 2 * 10, '10 is not greater than 2 * 10')

console.warn('oh no')
console.error(':(')