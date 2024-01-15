const userEmail = "ishav@google.com"

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// Falsy value

// false, 0, -0, 0n,"" , null, undefined, NaN

// Truthy Values

// every values except falsy values. 

// truthy values also - "0", "false", " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }

// Nullish Coalescing Operator (??): null undefined

// this removes the null and undefined
// It is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined

let val1
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10    

val1 = null ?? 10 ?? 80

console.log(val1);

// Ternary operator
// condition ? true : false

const  iceTeaPrice = 70

iceTeaPrice <= 50 ? console.log("Less than 50") : console.log("More than 50");