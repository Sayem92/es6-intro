const max = Math.max(15, 52, 50, 555);
// console.log(max)
const numbers = [15, 52, 50, 555]
// ... dara array teke sob number bar korci oita na dile output NaN asbe
// const largest = Math.max(...numbers);
// console.log(largest)

// const numbers2 = numbers;
// numbers.push(1000);
// numbers2.push(99999)
// console.log(numbers);
// console.log(numbers2);

// oita dile sudu aladaa hobe but array second 2 ta oibo ---- 
// [ 15, 52, 50, 555, 1000 ]
// [ [ 15, 52, 50, 555, 1000 ], 99999 ]

//... dile array modde value ta sudu nibe
//  [ 15, 52, 50, 555, 1000 ]
// [ 15, 52, 50, 555, 99999 ]

// const numbers2 = [...numbers];
// numbers.push(1000);
// numbers2.push(99999)
// console.log(numbers);
// console.log(numbers2);


// ager array anci and new array banaiah ar modde push ak sate ---- ...ar magic
const numbers4 = [44, 77, ...numbers, 1011, 33, 00]
console.log(numbers4)
