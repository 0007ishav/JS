const name = "ishav"
const repoCount = 20

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} & my repo count is ${repoCount}`);
// String interpolation. Ismein directly methods use kr skte hai.

const gameName = new String('Ishav-Strnge')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());


console.log(gameName.charAt(4));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)   // ending value is exclusive
console.log(newString);

const anotherString = gameName.slice(-4,4)
console.log(anotherString);

const newStringTwo = "    Ishav         "
console.log(newStringTwo);
console.log(newStringTwo.trim());

const url = "https:://ishav.com/ishav%07strnge"

console.log( url.replace('%07' , '-'))

console.log(url.includes('ishav'));

console.log(gameName.split('-'));