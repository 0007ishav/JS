// JavaScript is a dynamically typed language. This means that variable types are determined at runtime, 
// and you do not need to explicitly declare the type of a variable before using it. You can assign different 
// types of values to a variable during its lifetime.

// For example, in JavaScript, you can do the following:

// let x = 10; // x is now a number
// x = "Hello"; // x is now a string
// x = true; // x is now a boolean




// Primitives (CallByValue types)--------------------------------------
// CallByValue - It is a method of passing arguments to a function where the actual value of the argument is copied into a separate location accessible by the function.
// Memory reference nahi milega, value ko copy krke milta h , changes sirf copy mn hota h.

// 7 types : String, Number, Boolean, null(empty), undefined, BigInt, Symbol

const str = "Data Types"
const score = 100
const scoreValue = 100.3

const isLoggenIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')    

console.table([id, anotherId]);
console.log(id === anotherId);       //id & anotherId index will be unique

const bigNumber = 44n
console.log(typeof bigNumber);

// Non primitive (Reference type)--------------------------------------

// Array, Object, Functions

const cars = ["Dodge", "Mustang", "Challenger"]

let myObj = {
    name: "ishav",
    age: 21
}

const myFunc = function() {
    console.log("Hello World!");
}
myFunc()

console.log(typeof myObj);

// Type of val     	Result
// Undefined	    "undefined"
// Null	            "object"
// Boolean	        "boolean"
// Number	        "number"
// String	        "string"
// Array            "Object"
// Function         "Object Function"
// Object           "Object"



// -----------------Memory-----------------------------

// Stack -> Primitive data type   -> Copy of variable will be provided

// Heap -> Non-primitive data type -> Reference of 


let name = "stack"

let anotherName = name
anotherName = "changed"

console.log(name);
console.log(anotherName);

let userOne = {
    email : "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "ishav@google.com"

console.log(userOne.email);
console.log(userTwo.email);