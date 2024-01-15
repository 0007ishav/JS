const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by apple'
}

// for (const key in myObject) {
//     console.log(key)             // console keys
// }

// for (const key in myObject) {
//     console.log(myObject[key])       // console values on specific key
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`)
// }

const programming = ["js", 'rb', "py", "cpp"]

// for (const key in programming) {
//     console.log(key);
// }

for (const key in programming) {
    // console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('KR', "Korea")
map.set('IN', "India")
map.set('IT', "Italy")

for (const key in map) {
    // console.log(key);     Map is not iterabel
}