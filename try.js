

var veg = "carrot"
var veg = "radish"

console.log(veg)

 let fruit = "apple"
 // let fruit = "ball" // let cannot be re-declared.
 console.log(fruit)

 // 2.6 swap
 let c;
 let a = 1;
 let b = 2;
  c=a;
  a=b;
  b=c;

 console.log("a="+a,"b="+b)

 // 2.7 template literal ??
 console.log("double quote = \"\"")  // escape character \" = "
console.log('double quote = ""')

// 3 Object

let person ={
    first_name: "John",
    last_name: "Doe",
    age: " ",
    website: "john@doe.com"
}
console.log("name is "+person.first_name +" "+ person.last_name)

let monitor = {
    model: "samsung",  // this comma if not given syntax error occurs
    hertz: 120
}
console.log(monitor)

// 3.1
// let obj = {
//     name : "john",
//     1 : "one"
// }
// console.log(obj.name)
// console.log(obj[1])   // console.log(["key_name"])

// 3.2
let obj = {
    name : "Dolma",
    Name : "Tsering",
    name : "baba"  // replaces "Dolma"
}
console.log(obj.name)
console.log(obj.Name)

obj.name="Tashi"  // changing value of our key.
console.log(obj.name)



// // wap for sum of 1 and 2 is 3
// console.log(`sum of ${1} and ${2} is ${1 + 2}`)


  function difference(num1,num2){
    console.log(`difference is ${num2-num1}`)
  }

  difference(50,80);


console.log(Math.random())
console.log(Math.random())
console.log(Math.random())
console.log(Math.random())
console.log(Math.random())