let myName = "Ishav     "
let game = "COC     "

// console.log(myName.trim().length);


let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.ishav = function(){
    console.log(`Ishav is present in all objects`);
}


Array.prototype.heyIshav = function(){
    console.log(`Ishav says hello`);
}

// heroPower.ishav()
// myHeroes.ishav()
// myHeroes.heyIshav()

// Inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}
const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// Modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUser = "JS        "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}
anotherUser.trueLength()
myName.trueLength()
game.trueLength()
"ishav".trueLength()