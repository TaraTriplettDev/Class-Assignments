//find: Return the first element which satisfies the condition

const ages = [24, 22, 25, 32, 35, 18]

const age = ages.find((age) => age < 20)

console.log(age)

// Example 2
// findIndex: Return the position of the first element which satisfies the condition

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const ages = [24, 22, 25, 32, 35, 18]

const result = names.find((name) => name.length > 7)
console.log(result) // 0

const age = ages.findIndex((age) => age < 20)
console.log(age) // 5

//Find used on an array of objects 