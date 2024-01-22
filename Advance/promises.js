const promiseOne = new Promise(function(resolve, reject){
    // Do asyns task
    // DB calls, cryptography, network

    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})


new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
    }, 1000);
}).then(() => {
    console.log("Second promise consumed");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "js", email: "Js.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "ishav", password: "hi"})
        } else {
            reject('Error: Something went wrong')
        }
    },1000)
})


// You can't do this. 

// const username = promiseFour.then((user) => {
//     console.log(user);
//     return user.username
// })

// console.log(username);

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => {
    console.log("Finally");
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        // let error = false
        let error = true
        if(!error){
            resolve({username: "JS", password: "hi"})
        } else {
            reject('Error: JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
   try {
     const response = await promiseFive
     console.log(response);
   } catch (error) {
    console.log("Error");
   }
}

consumePromiseFive()

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        console.log(typeof response);
        const data = await response.json()    // Isse bhi await krwana pdega. response ko json mn convert krne mn time lg rha hai
        console.log(data);
    } catch (error) {
        console.log("error");
    }
}

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => console.log(data))
.catch((error) => console.log("Error"))