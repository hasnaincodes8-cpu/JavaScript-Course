// let start = 10;
// let limit = 20;
// let random = Math.round(Math.random() * (limit - start) + start);

// console.log(random);

// array and methods of array 

let firstArray = [1, 2, 3, 4, 5];

console.log(firstArray.length);
console.log(firstArray[0]);
console.log(firstArray[firstArray.length - 1]);

firstArray.push(6);
console.log(firstArray);

firstArray.pop();
console.log(firstArray);

firstArray.unshift(0);
console.log(firstArray);

firstArray.shift();
console.log(firstArray);

let secondArray = [7, 8, 9];
let combinedArray = firstArray.concat(secondArray);
console.log(combinedArray);

let slicedArray = combinedArray.slice(2, 5);
console.log(slicedArray);

let index = combinedArray.indexOf(3);
console.log(index);

// includes method is using for checking the value in the array and return true or false
let hasValue = combinedArray.includes(4);
console.log(hasValue);

// filter method is used to filter the array based on a condition and return a new array with the filtered values
let filteredArray = combinedArray.filter(function (value) {
  return value > 5;
});
console.log(filteredArray);

// map method is used to create a new array by applying a function to each element of the original array
let mappedArray = combinedArray.map(function (value) {
  return value + 1;
});
console.log(mappedArray);

// different between slice, splice and split
let sliceArray = combinedArray.slice(2, 5);
console.log(sliceArray);

let spliceArray = combinedArray.splice(2, 3);
console.log(spliceArray);

let splitArray = "hello,world".split(",");
console.log(splitArray);