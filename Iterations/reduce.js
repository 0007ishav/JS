const myNums = [1, 2, 3, 4, 5]

// const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`Accumulator is: ${acc}, Current Value is ${currVal}`);
//     return acc + currVal
// },0)

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: 'js course',
        price: 999
    },
    {
        itemName: 'python course',
        price: 799
    },
    {
        itemName: 'mobile dev course',
        price: 5999
    },
    {
        itemName: 'data science',
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay)