class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        // console.log(this._password);
        // return  this._password.toUpperCase()
        return `${this._password}ishav`
    }
    set password(value){
        this._password = value
    }
}

const ishav = new User("ishav@google.com", "abc")
console.log(ishav.password);
console.log(ishav.email);