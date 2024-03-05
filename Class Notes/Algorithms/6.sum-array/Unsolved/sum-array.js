// Write code to add all the numbers in `arr` and return the total

// var sumArray = function(arr) {
//     let sum = 0

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//         console.log(i)
//     }
//     return sum;
// };

var sumArray = function(arr) {
    return arr.reduce(function(total, currentValue) {
        return total + currentValue;
    })
};

