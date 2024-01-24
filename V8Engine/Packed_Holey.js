const myArr = []
// %DebugPrint(myArr)

// Continous , Holey

// SMI (Small Integer)
// Packed elements
// Double (float, string, function)


const arrTwo = [1, 2, 3, 4, 5]    // PACKED_SMI_ELEMENTS
// Best type of array , only allowed numbers not even decimal.

arrTwo.push(6.0)
// PACKED_DOUBLE_ELEMENTS

arrTwo.push('7')
// PAKCED_ELEMENTS

arrTwo[10] = 11
// HOLEY_ELEMENTS

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);
console.log(arrTwo[19]);

// Bound Check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.prototype, 10)

// Holes are very expensive in js

const arrThree = [1, 2, 3, 4, 5]
console.log(arrThree[8]);

// SMI > DOUBLE > PACKED    SMI is highest optimized
// H_SMI > H_DOUBLE > H_PACKED

// ek baar downgrade ho gya to upgrade nhi hoga. SMI > Double (yes), Double > SMI (no)

const arrFour = new Array(3)
// just 3 holes. HOLEY_SMI_ELEMENTS
arrFour[0] = '1' // HOLEY_ELEMENTS            //Downgrade hogya from H_SMI TO H_PACKED
arrFour[1] = '2' // HOLEY_ELEMENTS    
arrFour[2] = '3' // HOLEY_ELEMENTS    

const arrFive = []  //SMI
arrFive.push('1') // PACKED_ELEMENTS
arrFive.push('2') // PACKED_ELEMENTS
arrFive.push('3') // PACKED_ELEMENTS


const arrSix = [1, 2, 3, 4, 5]

arrSix.push(Nan)   // PACKED_DOUBLE bn gya abb isse upgrade nhi kr skte. optimization kam ho gyi 
arrSix.push(Infinity)   // chahe remove kr do fr bhi kch ni hoga

// for, for-of, forEach   //Inke method use kro. bnane se acha method user krna h. Browser engine methods ke lie optimise kra hota ha but hmara code client side hota h and uske browser ne optimise kr rkha hai ya nhi.
// so use methods for creating loops.



// Packed elements means that there are no holes in the array.

// More details - (https://blog.gauravthakur.in/how-javascript-array-works-internally)