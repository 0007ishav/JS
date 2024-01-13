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
console.log(loginUserMessage());