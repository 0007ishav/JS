// The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name

// JavaScript arrays are resizable and can contain a mix of different data types.

// JavaScript arrays are zero-indexed

// JavaScript array-copy operations create shallow copies.(Share same refernece)
const myArr = [0, 1, 2, 3, 4, 5]

const cars = ["dodge", "challenger", "demon"]

const myArr2 = new Array(1, 2, 3, 4, 5)

// console.log(myArr[0]);

// Array Methods

myArr.push(6)
myArr.push(7)
myArr.push(8)
// console.log(myArr);

myArr.pop()
// console.log(myArr);

myArr.unshift(9)
// console.log(myArr);

myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(7));
// console.log(myArr.indexOf(7));

const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof myArr);
// console.log(newArr);
// console.log(typeof newArr);


// Slice, Splice

// console.log("A ", myArr);

const myn1 = myArr.slice(1,3)        //It creates a new array.

// console.log(myn1);
// console.log("B ", myArr);

const myn2 = myArr.splice(1,3)       // it manipulates the original array.
// console.log("C ", myArr);          
// console.log(myn2);


