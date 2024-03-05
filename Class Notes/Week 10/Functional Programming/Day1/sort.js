// sort: The sort method arranges the array elements in either ascending or descending order

const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']

console.log(products.sort()) 

// [ 'Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar' ]
// Now the original products array is sorted 

// Defining a sorting algorithm

const numbers = [74, 18, 10, 5, 84]

function compareFunction(a, b) {
  // 1. < 0 ... a comes first
  // 2. 0... no change
  // 3. > 0 ... b comes first

  return a - b;
}