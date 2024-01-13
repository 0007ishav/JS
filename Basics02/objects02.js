// const tinderUser = new Object()        //Singleton object

const tinderUser = {}    // Non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser); 

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Ishav",
            lastName: "Singh"

        }
    }
}

// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName.firstName);
// console.log(regularUser.fullName.userFullName.lastName);

const obj1 = { 1: "a", 2 : "b"}
const obj2 = { 3: "c", 4 : "d"}
const obj4 = { 5: "e", 6 : "f"}

// const obj3 = {obj1, obj2} 

// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}

console.log(obj3);

 const users = [
    {
        id: 1,
        email: "i@gmail.com"
    },
    {
        id: 1,
        email: "i@gmail.com"
    },
    {
        id: 1,
        email: "i@gmail.com"
    },
    {
        id: 1,
        email: "i@gmail.com"
    }
 ]

 const output = users[1].email

//  console.log(output);

//  console.log(Object.keys(tinderUser));
//  console.log(Object.values(tinderUser));
//  console.log(Object.entries(tinderUser));

//  console.log(tinderUser.hasOwnProperty('isLoggedIn'));

 const course = {
    courseName: "JS",
    price: "777",
    courseInstructor: "Ishav"
 }

 console.log(course.courseInstructor)

 const {courseInstructor: instructor} = course
 console.log(instructor); 