// // all important array methods

// // let firstArray = ["apple", "banana", "cherry", "date", "elderberry"];
// // const combinedArray = firstArray.concat(["fig", "grape", "honeydew"]);

// // console.log(combinedArray);


// // you thinking best option to combine multiple arrays is using spread operator
// // best option is using concat method because it is more readable and easy to understand

// // const secondArray = ["kiwi ", "lemon ", "mango "];
// // const thirdArray = ["papaya ", "quince ", "raspberry "];
// // const fourthArray = ["ugli fruit ", "vanilla ", "watermelon "];

// // let combinedArray = secondArray.concat(thirdArray, fourthArray);
// // console.log(combinedArray);

// // let combineBySpread = [...secondArray, ...thirdArray, ...fourthArray];
// // console.log(combineBySpread);

// // let fruits = ["apple", "banana", [1,2,[3,4]]];

// //     let result = fruits.flat(Infinity); // flat method is used to flatten the array
// //     console.log(result);

// //     fruits.push("cherry"); // push method is used to add an element at the end of the array
// //     console.log(fruits);

// //     fruits.pop(); // pop method is used to remove the last element of the array
// //     console.log(fruits);

// //     fruits.unshift("kiwi"); // unshift method is used to add an element at the beginning of the array
// //     console.log(fruits);        
// //     fruits.shift(); // shift method is used to remove the first element of the array
// //     console.log(fruits);

// //     let index = fruits.indexOf("banana"); // indexOf method is used to find the index of an element in the array
// //     console.log(index);

// //     let isPresent = fruits.includes("banana"); // includes method is used to check if an element is present in the array
// //     console.log(isPresent);

// //     let slicedArray = fruits.slice(1, 3); // slice method is used to extract a portion of the array
// //     console.log(slicedArray);

// //     let splicedArray = fruits.splice(1, 2, "grape", "kiwi"); // splice method is used to remove or replace elements in the array
// //     console.log(splicedArray);
// //     console.log(fruits);            

// let key = Symbol("key");

// let obj = {
//     name: "John",
//     age: 30,
//     [key]: "35%$573$",
//     city: "New York",
//     status: ["active", "inactive"],
//     "last login": {"date": "2024-06-01", "time": "10:00 AM"}
// }

// //console.log(obj["last login"]);
// let changeName = obj.name = "Doe"; // changing the name property of the object
// console.log(changeName);

// Object.freeze(obj); // freezing the object to prevent any changes to it

// obj.city = "Los Angeles"; // trying to change the city property of the object
// console.log(obj.city); // will still print "New York" because the object is frozen

// // array

// const myArr = [0, 1, 2, 3, 4, 5]
// const myHeors = ["shaktiman", "naagraj"]

// const myArr2 = new Array(1, 2, 3, 4)
// // console.log(myArr[1]);

// // Array methods

// // myArr.push(6)
// // myArr.push(7)
// // myArr.pop()

// // myArr.unshift(9)
// // myArr.shift()

// // console.log(myArr.includes(9));
// // console.log(myArr.indexOf(3));

// // const newArr = myArr.join()

// // console.log(myArr);
// // console.log( newArr);


// // slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);


const myArray = [1, 3, 4, 5, 6, " ", "  - ", 9]
index = ","
console.log(myArray.join()); // it will use for print only data in pure form without commas and spaces 
// also can add spaces and signs between values lite 1 - 2 - 3, 3 / 3 / 4, 12345, 1 2 3 4
