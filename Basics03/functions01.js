function addTwoNum(num1, num2) {         // num1 & num2 are paramters. Functions definition.

    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNum(4, 3)    // 4 and 3 are arguments. Function calling

console.log("Result is: ", result);

function loginUserMessage(username = "Sam") {    // Default value 

    // if (username === undefined) {
    //     console.log("Please enter a username");
    //     return
    // }

    if (!username) {
        console.log("Please enter a username");
        return
    }

    return `${username} Just logged in`
}

// console.log(loginUserMessage("Ishav"));
// console.log(loginUserMessage());

// function calculateCartPrice(num1) {
//     return num1
// }

// console.log(calculateCartPrice(2));


// function calculateCartPrice(...num1) {  // Here, Three dots are rest operator.
//     return num1
// }
// console.log(calculateCartPrice(2,4,5));


function calculateCartPrice(val1, val2, ...num1) {  // Here, Three dots are rest operator.
    return num1
}
// console.log(calculateCartPrice(2,4,5,7));

const user = {
    username: "Ishav",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));