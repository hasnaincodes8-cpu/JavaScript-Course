
// let convert = Boolean(value)


// value = null

// convert = String(value)
// console.log(typeof convert);

// console.log(convert)

// let numberValue = 42

// let stringValue = String(numberValue)
// console.log(typeof stringValue);

// console.log(stringValue)
// let my = null;
// let my2;
// console.log(my);
// console.log(my2);


// console.log("2" == "abf");
// console.log(null < 0);
// console.log(null == 0);
// console.log(null >= 1);




let v1 = 12334
let v2 = v1;
v2 = 222

console.log(v2)
console.log(v1)

let obj1 ={
    name: "Hasnain",
}
let obj2 = obj1;

obj2.name = "khan";


console.log(obj2.name)

// heap memory where store non primitive data types like Object, 
// function and array. 
// There have a core different between heap and stack memory is :-

//1)- heap memory store data and then we can access by reference they cannot give us a actual data copy.

//2)- While stack memory where store all primitive data types and they will give us a copy of 
// data then we can change the value the of actual data which they give us copy but in this
// condition the actual data will note changed because they just give us copy not direct access to original data
// on the other side heap giving us reference of the actual data

// the summery is very clear and simple the heap data can be changed by reference and other side the 
// stack data is not changed The actual data will in same condition in old value
// if we change something in copy data that copy will be become a new data.  Thats all



let name = "Hasnain7766@gmail.com";
console.log(name.substring(0, 2) + "*****"+ name.slice(-10))

let url = "https://primenexus.rf.gd%20/public%20login.php";

console.log(url.replace('%20', '-'))


