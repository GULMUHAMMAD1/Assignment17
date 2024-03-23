// // Declare and initialize an empty multidimensional array 
// const emptyArray = [[]]; 


// // Declare and initialize 
// const matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];


// // Program to print numeric counting from 1 to 10
// for ( i = 1; i <= 10; i++) {
//     console.log(i);
// }



// Program to print multiplication table of a number with a given length
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter the number whose multiplication table you want to print: ', (numString) => {
//   const number = parseInt(numString);

//   rl.question('Enter the length of the table: ', (lengthString) => {
//     const length = parseInt(lengthString);

//     console.log(`Multiplication table of ${number} up to ${length} terms:`);
//     for (let i = 1; i <= length; i++) {
//       console.log(`${number} * ${i} = ${number * i}`);
//     }

//     rl.close();
//   });
// });



// // Program to print items of an array using a for loop
// const fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// console.log("Items of the fruits array:");
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }




// a. Counting: 1, 2, 3, ..., 15
function countingSeries() {
    let series = [];
    for (let i = 1; i <= 15; i++) {
      series.push(i);
    }
    return series.join(", ");
  }
  
  // b. Reverse counting: 10, 9, 8, ..., 1
  function reverseCountingSeries() {
    let series = [];
    for (let i = 10; i >= 1; i--) {
      series.push(i);
    }
    return series.join(", ");
  }
  
  // c. Even: 0, 2, 4, ..., 20
  function evenSeries() {
    let series = [];
    for ( i = 0; i <= 20; i += 2) {
      series.push(i);
    }
    return series.join(", ");
  }
  
  // d. Odd: 1, 3, 5, ..., 19
  function oddSeries() {
    let series = [];
    for ( i = 1; i <= 19; i += 2) {
      series.push(i);
    }
    return series.join(", ");
  }
  
  // e. Series: 2k, 4k, 6k, ..., 20k
  function seriesWithK() {
    let series = [];
    for ( i = 2; i <= 20; i += 2) {
      series.push(i + "k");
    }
    return series.join(", ");
  }
  
  console.log("a. Counting: " + countingSeries());
  console.log("b. Reverse counting: " + reverseCountingSeries());
  console.log("c. Even: " + evenSeries());
  console.log("d. Odd: " + oddSeries());
  console.log("e. Series: " + seriesWithK());


