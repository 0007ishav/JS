const score = 100
console.log(score);
  
const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8944

console.log(otherNumber.toPrecision(3));

const anotherNumber = 1123.89
console.log(anotherNumber.toPrecision(3)); //It will give exponential values. use it carefully where u knw only 3 digits value will come.

const hundreds = 1000000
console.log(hundreds.toLocaleString());

console.log(Math);
console.log(Math.abs(-7));
console.log(Math.round(7.7));
console.log(Math.ceil(7.4));
console.log(Math.floor(7.7));
console.log(Math.min(7, 6 , 2 , 9));
console.log(Math.max(7, 6 , 2 , 9));

console.log(Math.random());
console.log((Math.random()*10) + 1);   //Shifting values to left.
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20

const result = (Math.floor(Math.random() * (max - min + 1)) + min)

console.log(result);
