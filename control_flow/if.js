// If
// const isUserLoggenIn = true
const temperature = 41

if(temperature === 40){
    console.log("Temperature is 40");
} else {
    console.log("Temperature is greater than 50");
}

// <, >, <=, >=, ==, !=, ===, !==

const score = 200

if (score > 100) {
    // var power = "fly"         // Don't use var
    const power = "fly"          // use this instead
    console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`);    // using var, it will run too.

const balance = 1000

// if (balance > 500) console.log("Balance is greater than 500");  // immature code

// if (balance > 500) console.log("Balance is greater than 500"),
// console.log("Unreadable code & immature code");

// if (balance < 500) {
//     console.log("Less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("Greater than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = true

if (userLoggedIn && debitCard
    ){
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
