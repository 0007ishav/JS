// window = {this = window}
// node = this => {}

function setUserName(username){
    this.username = username
    console.log("Called");
}

function createUser(username, email, password){
    setUserName.call(this, username)    // Current context is passed. After removing execution context of setUsername it saves data to createUser this. Call helps in doing this. 

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@google.com", "12300")
console.log(chai);