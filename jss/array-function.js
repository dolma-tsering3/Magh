let arr = [1,2,3,4,5,6]
// arr[3] = 4
// above can be better written using push() function or method.
// arr.push(7) // add at the end
// arr.unshift(0)  // adding at the beginning
// arr.pop() // last element removed
// arr.shift() // first element removed
// arr.splice(1,2,8,9,10)  // removes elements splice(index start,no.of items to remove,elements to add from that index)
let arr2 = arr.slice(0,4) // gives new array with required no. of elements beginning from zero index
console.log(arr2)
console.log(arr)


/*
callback function : forEach()
  - a function passed to another function as variable 
  - forEach() is not for function call but instead pass the name only.
*/

/*
Array functions : 
      forEach() - simple forLoop
      map()  - loop, modify data inside an array and returns new array
      filter() - loop , cannot modify, filter out our array element, returns filtered array
      find() - loop, searches for a single element from an array and returns the selected single values.
*/
let array = [1,9,3,8,4,5,6,2,7]
//  printEach = (element,index) => { // forEach() automatically passes all the elements and their index of an array
// console.log(`In index-${index}, we have ${element}`)
// }
//  array.forEach(printEach) 

// above can also be done as :
array.forEach((el,indx) => {console.log(`In index-${indx}, we have ${el}`)}) // function used directly inside forEach() : it is anonymous function.

// doubling an array
// let array2 = array.map( (el) => { return el*2})  // returns double of array in array2 . map(element,index)
// console.log(array2)

let array2 = array.filter( (element,index) => {  // if true returns value and if false return empty value
     return element > 5 ?  true : false                  
})
console.log({array2})


let products = [
    { name: "samsung", price:456},
    { name: "apple", price:3343},
    { name: "nokia", price:1298},
    { name: "hp", price:9430},
    { name: "macbook", price:1111}
]

let selected_price = products.find( (element,index)=>{
    if(element.name=="apple")
    return true
})
console.log(selected_price.price)