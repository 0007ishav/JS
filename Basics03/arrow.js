const user = {
    username: "ishav",
    price: 888,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);  // 'this' correct context banata ha. Is scope mn jitne vi variables h unko access krne ke lie 'this' lga duga
        console.log(this);
    }
    
}

// user.welcomeMessage()
// user.username = "sam"   // Yaha context change ho gya.
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     console.log(this);
// }

// function chai() {
//     let username = "ishav"
//     console.log(this.username);
// }


// const chai = function () {
//     let username = "ishav"
//     console.log(this.username);
// }

// const chai =  () => {
//     let username = "ishav"
//     console.log(this.username);
//     // console.log(this);
// }
chai()

// const addTwo = (num1, num2) => {     // Basic arrow function
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2    // Implicit return

// const addTwo = (num1, num2) => (num1 + num2 )   // Implicit return

const addTwo = (num1, num2) => ({username: "ishav"} )   // Implicit return

// console.log(addTwo(3, 4));
