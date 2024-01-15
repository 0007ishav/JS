//  For of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greeting = 'Hello World!'

for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('KR', "Korea")
map.set('IN', "India")
map.set('IT', "Italy")

// console.log(map);

// for (const key of map) {
//     console.log(key);
// }

for (const [key, value] of map) {         // Destructring
    // console.log(key, ':-', value);
}

const myObj = {
    game1: "NFS",
    'game2': "Spiderman"
}

for (const [key, value] of myObj) {          // Object is not iterable
    console.log(key, ':-', value);
}