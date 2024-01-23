const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 4
// console.log(Math.PI);


// const myNewObject = Object.create(null)

const chai = {
    name: 'Ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("Chai nahi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: true
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// console.log(chai);
// chai.name = 'ishav'

// console.log(chai);

for (let [key, value] of Object.entries(chai)) {
    if (typeof value != 'function') {
        
        console.log(`${key}: ${value}`);
    }
}