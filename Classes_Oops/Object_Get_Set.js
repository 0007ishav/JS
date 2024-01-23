const User = {
    _email: 'i@gogogle.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

console.log(User._email);

const tea = Object.create(User)
console.log(tea.email);