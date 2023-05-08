/* Primitive data types
string
number : integer,float,double
boolean
undefined (variable value not given)
null
*/ 
let data=null;

/* non-primitive data types 
  collection : Array,Object
  non-reference 
*/

/* Array : list of items
   collection of diff values
   collection of similar data types.
   elements
   index : always start with zero.
   reading and updating array value - use index
*/

let brands = ["puma","nike","levis"]; // here puma is element1 or index0

brands[1]="adidas"  // modified element2
brands.push("skechers")  // adding of element in array.. stays as last element.

console.log(brands);


/* Object
 - like real life object that has many properties 
 key must be string
    syntax:
    let  objectName = {
         <key> : "<value>",
         <key> : "<value>",
         <key> :"<value>"
     }
 */

 let mobile = {
    color:"red",
    brand:"apple",
    model:"11Pro"
 }
 console.log("brand is", mobile.model)  // we can use comma or plus : same thing
 mobile.color= "yellow"  // modified color key
 console.log(mobile?.color) // ?. means if there is value read else undefined. skip error

 let person1 ={
   name : "baba",
   age : 2,
   charac : ["joy","smart"] // array inside object
 }
 let person2 = {
   name : "tsering",
   age : 3
 }
 
let person = [person1,person2] // object inside array
console.log(person)


let form = {
  name : "doma",
  email : "email@gmail.com"
}
let to_print = "name";
console.log(form[to_print])  // console.log(form["name"])  console.log(form["key_name"]) it is not index as array

let task1 ={
  "userid":1,
  "id":1,
  "title":"one",
  "completed":false
}

let task2 ={
  "userid":2,
  "id":2,
  "title":"two",
  "completed":false
}

let task3 ={
  "userid":3,
  "id":3,
  "title":"three",
  "completed":false
}
let task4 ={
  "userid":4,
  "id":4,
  "title":"four",
  "completed":false
}

let task5 ={
  "userid":5,
  "id":5,
  "title":"five",
  "completed":true
}

// function taskStatus(task){
  
//     console.log(`Task-${task.id} is ${task.completed}`)
//     console.log(`Task-${task.title} is ${task.completed}`)

// }
// taskStatus(task1)
// taskStatus(task2)
// taskStatus(task3)
// taskStatus(task4)
// taskStatus(task5)

function idOrTitle(task,key){
console.log(`Task-${task[key]} is ${task.completed}`)
// delete task[key].name // delete is a keyword
}
idOrTitle(task3,"id");
idOrTitle(task5,"title");

// console.log(`task1 is ${task5.completed}`)



// Function : performs certain task.
/* syntax :
  function<functionName>(){
    task here....
  }
 */

  // wap to find even or odd 
function checkOddEven(num) {
  if(num % 2==0){ // modulus gives remainder
      console.log('even')
  } else{
      console.log('odd')
  }
}

checkOddEven(45);
checkOddEven(81);
checkOddEven(600);

/* 
Operator:
AND &&
OR ||


COMPARATOR
=
==  HERE DOUBLE EQUALS TO TYPECASTE TO ONE TYPE.  1='1' true
===  doens't typecaste. it checks datatypes eg. 1==='1'  false
*/

// typeof() returns datatype
// typeof(45) returns 'number'
// typeof("ram") returns 'string'

// wap to check if it is number and if it is positive or negative

function identify(value){
  if(typeof(value)=="number"){
      if(value==0){
          console.log("neither positive or negative")
      }
     else if(value>0)
      console.log("number is positive")
      else
      console.log("number is negative")
     
  }
  else
  console.log("given data is not a number")
}
identify("pema")
identify(0)
identify(-9)
identify(590)


let todos = [
  {
      'userId': 1,
      'id' : 1,
      'title': 'december winter',
      'completed':false
  },
  {
      'userId': 2,
      'id' : 2,
      'title': 'november autumn',
      'completed':true
  },
  {
      'userId': 3,
      'id' : 3,
      'title': 'october fall',
      'completed':false
  }
]

function print(index){
/*   if(todos[index].completed) // if(true)
 console.log(`task-${todos[index].id} is complete`)
  else 
*/     console.log(`task-${todos[index].id} is incomplete`)

// above can be done also by condition or ternary operator
console.log(`task-${todos[index].id} is ${todos[index].completed ? "completed" : "incomplete"}`)
}
print(0);
print(1);
print(2);