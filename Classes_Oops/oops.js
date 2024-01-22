const user = {
    username: "Ishav",
    loginCount: 7,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user);
// console.log(user.username);
// console.log(this);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    // return this

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
}

const userOne = new User("ishav", 7, true)
const userTwo = new User("strnge", 7, true)

// console.log(userOne);
console.log(userOne.constructor);
// console.log(userTwo);