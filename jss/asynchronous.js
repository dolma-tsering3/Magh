
/* synchronous vs asynchronous 

synchronous : task that runs serially
asynchronous : task that runs later and not immediately as seems
asynchronous is very important
*/

console.log("synchronous1")
console.log("synchronous2")

// eg of asynchronous 
function doSomething(){
    console.log("Asynchronous3")
}
setTimeout(doSomething,0)  // setTimeout(<callback>,<time in ms>) time is after how many ms to run
console.log("synchronous4")
console.log("synchronous5")
