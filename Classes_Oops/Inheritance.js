class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`User name is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)     // Same as call & it will take this implicitly.
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chemistryTeacher = new Teacher("chai", "chai@teacher.com", "123")

chemistryTeacher.addCourse()
chemistryTeacher.logMe()

const principal = new User("Principal")

// principal.addCourse()
principal.logMe()

console.log(chemistryTeacher === principal);
console.log(chemistryTeacher === Teacher);
console.log(chemistryTeacher instanceof Teacher);