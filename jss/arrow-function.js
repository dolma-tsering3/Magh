/*
syntax :
let functionName = () => {}
*/

// return in function
/* function sum(num1,num2){
    return num1+num2
 }

 let result = sum(3,5);
*/ console.log(`sum is ${result}`)

// above can be done using Arrow Function as below. Normal function is replaced by arrow function
let sum = (num1,num2) => {
    console.log(`sum is ${num1+num2}`)
}
sum(4,6)