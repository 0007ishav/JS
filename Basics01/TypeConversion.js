"use strict"
let score = "33"
// let score = "33aaa"
// let score = 33
// let score = null
// let score = undefined


// console.log(typeof(score));

let valueInNumber = Number(score)

// console.log(typeof valueInNumber);

// console.log(valueInNumber);


// "33" => 33
// "33aaa" => NaN
// true => 1; false => 0


// let isLoggedIn = 1
// let isLoggedIn = 0
// let isLoggedIn = ""
// let isLoggedIn = "hello"
// let isLoggedIn = null
let isLoggedIn = NaN
// let isLoggedIn = 0n

let booleanIsLoggenIn = Boolean(isLoggedIn)

console.log(booleanIsLoggenIn);

// 1 => true; 0 => false
// "" => false
// "hello" => true

// false, 0, 0n, -0, “”, null, undefined, and NaN are falsy values.

let someNumber = 27

let stringNumber = String(someNumber)

// console.log(stringNumber);
// console.log(typeof stringNumber);



// -----------Operations--------------------

let value = 2

let negValue = -value

// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);


let str1 = "hi"
let str2 = " hello"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);   // String is first , other will be string
// console.log(1 + 2 + "2" );  // before string all operation ho jayege and then string.

// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-abstract-operations

// console.log(+true);   // 1
// console.log(true+);  //Error

// console.log(+"");   // 0


let gameCounter = 100
gameCounter++
++gameCounter

// console.log(gameCounter);

// Read this. Postfix and prefix 
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment