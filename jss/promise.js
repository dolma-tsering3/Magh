
// let promise1 = new Promise(<callback function>)

/*
Promise State
    pending
    resolved | fulfilled
    reject
*/
// promise works asynchronously

let promise1 = new Promise((resolve,reject) => {
   setTimeout(() => {
     //  resolve([{ name : "product-1"}])   // works when promise is fulfilled
     reject("server error")
   },2000)  // run after 2000ms
})
console.log(promise1)

promise1.then((res) =>{  // work after promise1
    console.log(res,"res")
}).catch(err => {   // if some error occurs then catch() will display that error
    console.log(err)
})
console.log("after promise")