const countries = ['Finland', 'Sweden', 'Denmark', 'Estonia', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

countries.forEach(myCountries);

function myCountries(country) {
  console.log(country);
}

names.forEach(myNames);

function myNames(name) {
  console.log(name);
}

numbers.forEach(myNumbers);

function myNumbers(number) {
  console.log(number);
}

// // const country = countries.map((country) => country.toUpperCase())
// // console.log(country)

// const longCountry = countries.map((countries) => longCountry.length())
// console.log(longCountry)

// const numbersSquare = numbers.map(mynum)

// function mynum(element) {
//     return element * element
// }
// console.log(numbersSquare)


// Explain the difference between forEach, map, filter, and reduce.
// forEach - method used to apply a function to each element in an array
// map - method used to create a new array containing the modified contents of another array
// filter - method used to select specific items in an array based on their characteristics
// reduce - method used to do operations on the items in an array with the accumulator, current value and optional initial value
// Define a callback function before you use it in forEach, map, filter or reduce.

// Use forEach to console.log each country in the countries array.
// Use forEach to console.log each name in the names array.
// Use forEach to console.log each number in the numbers array.
// Use map to create a new array by changing each country to uppercase in the countries array.
// Use map to create an array of countries length from countries array.
// Use map to create a new array by changing each number to square in the numbers array

// Part 2: 

const upperName = names.map((name) => name.toUpperCase())
console.log(upperName)

let finalPrice = products.map(products => products.price)
console.log(finalPrice)

const countriesContainingLand = countries.filter((country) => country.includes('land'))
console.log(countriesContainingLand) 

const countriesWithSixLetters = countries.filter((country) => country.length === 6)
console.log(countriesWithSixLetters)

const countriesGreaterThanSix = countries.filter((country) => country.length > 6)
console.log(countriesGreaterThanSix)

const countriesStartingWithE = countries.filter((country) => country.startsWith('E'))
console.log(countriesStartingWithE)

let priceValue = products.filter((products) => products.price )
console.log(finalPrice)

function getStringLists(array) {
  array.map(array => array.getStringLists);
  return array
}

const sum = numbers.reduce((acc, cur) => acc + cur, 0)






// Use map to change to each name to uppercase in the names array
// Use map to map the products array to its corresponding prices.
// Use filter to filter out countries containing land.
// Use filter to filter out countries having six character.
// Use filter to filter out countries containing six letters and more in the country array.
// Use filter to filter out country start with 'E';
// Use filter to filter out only prices with values.
// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
// Use reduce to sum all the numbers in the numbers array.
// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
// Explain the difference between some and every