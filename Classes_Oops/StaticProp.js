class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

   static createId(){     // Static won't give your access this method
        return `123`
    }

}

const ishav = new User("ishav")
// console.log(ishav.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")

iphone.logMe()
console.log(iphone.createId());