
console.log("welcome to JSS!")

// DATA TYPES : String, Number, boolean (true and false)
// add extension: Code Runner
/* js: case-sensitive, run-time error,auto semi-colon (js automatically gives the semi-colon internally and so it doesn't matter if we give or not .) */
// DRY - Donot Repeat Yourself.
/* variables :  container,box
       <variable_name> = <value> 
       variable name cannot start with number and symbols. */

prefix_sentence='we have course ' // single and double apastrophe is same thing. String variable
console.log(prefix_sentence + "Designing")
console.log(prefix_sentence + "Marketing")
console.log(prefix_sentence + "Mern")

price= 1500  // Number variable

// Reserved words can't be used in variable name. 


full_name = "gurung"  // snake_case
lastName = "tibetan" // camelCase 
lastName = "tamang"  // re-initialization

// var variable can be re-declared but let variable cannot be re-declared. re-initiablize can be done to both.
// var is not much used now.
var brand;  // declaration
 brand = "samsung"  // initialization
let color = 'red'
const PI = 3.14  // constant variable cannot be re-initialize


// Area of rectangle 

let length=5;
let breadth=8;
let area= length*breadth;
console.log("area of rectangle = " + area);

// prompt();  // pop-up window in console.

/*
pre-increment vs post-increment
pre-increment : increment value and then assign
post-increment : assign the value and then increment is done.
*/

let num1 = 1;
let num2 = 1
let num3 = ++num1; // num1=num1 + 1 , num3 = num1 
let num4 = num2++;  // num4 = num2 , num2= num2 + 1
console.log(num3);  
console.log(num4);  