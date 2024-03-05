//Functional Programming
//Instead of writing loops, the latest version of JS introduced lots of built in methods which
//can be used to solve complicated problems.  All builtin methods take callback functions, we will tKE
//a look at forEach, map, filter, reduce, find, every, some and sort.

//forEach
//forEach is used ato iterate an array of elements.  We use forEach with arrays. It takes a 
//callback function with elements, index paramters and array itself. The index and the array are
//optional
//map
//filter
//reduce
//find
//every
//some
//sort

// numbers.forEach(myNumbers);

// function myNumbers(item) {
//  sum += item
// }

const fruits = ["apples", "oranges", "cherries"]
fruits.forEach(myFruits);
// establishing "myFruits" as the callback function

function myFruits(element) {
  console.log(element);
// The callback function in full, executes its action for the forEach method when it is used as an argument for its parameter
}

const numbers = [2, 3, 40, 50]
numbers.forEach(myNumbers);
// (myNumbers) = callback function
function myNumbers(num) {
  console.log(num);
  //
}