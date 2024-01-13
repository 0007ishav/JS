// Singleton
// object.create

// object literals

const mySym = Symbol("key1")   // Symbol

const JsUser = {
    name: "Ishav",
    "full name": "Ishav Singh",
    [mySym]: "mykey1",         // Symbol syntax in object
    age: 21,
    location: "Ynr",
    email: "ishav@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])    //Symbol access syntax

// Object.freeze(JsUser)
JsUser.age = 24

// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JS User");
}
JsUser.greeting2 = function () {
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());