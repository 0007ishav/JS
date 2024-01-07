let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2024,0,23)
// let myCreatedDate = new Date(2024,0,23,7,7)
// let myCreatedDate = new Date("2024-01-07")
// let myCreatedDate = new Date("01-07-2024")
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime());
// Compare always in milliseconds


// console.log(Math.floor(Date.now() / 1000));    //In seconds

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getMinutes());
// console.log(newDate.toLocaleDateString());

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}));