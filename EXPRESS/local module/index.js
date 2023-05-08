//  we get package.json after typing npm(node package manager) init in terminal. It gives info about the express.

// Express and React both works in node environment

//  To install nodemon, terminal ma : npm install -g nodemon
// nodemon if installed then the changes we make gets automatically changed in terminal even when run code is not clicked.
// to install axios, terminal ma : npm i axios 
// similarly : npm i bcrypt
// after installing above third party module, their dependencies are added in package.json file and also package-lock.json (carries more info about installed module)
//  and node_modules are created automatically.
                                 

/* Global Object in node js :objects that doesnot need to be imported externally.
    eg. __filename
        __dirname 
        modules
        require
        setTimeout()
        setInterval()
        console
        process
*/

console.log(__filename)  // our file name

// setInterval( () => {},ms)   // it also has call back function as setTimeout()
// setInterval( () => {
//   console.log(1)
// },1000)    // runs after each sec as set.

console.log(__dirname) // our file directory 

// Modules is simply a js file
/* Node Modules 
  1.core module 
  - fs
  - http
  - path
    ( fs and path rarely used and http is mainly used)
 2. third party module / eg. axios, bcrypt
 3. local module

*/

// core module example :

const fs = require("fs") // fs= file system
fs.writeFile("custom.txt","hello world",(error,data)=>{
  console.log("file created")
})   // writeFile() is asynchronous in nature and require a callback function

fs.writeFileSync("sync.txt","synchronous")

// creating simple api using NODE
// const http = require("http")
// http.createServer((req,res) => {

//     if(req.url == "/todos" && req.method == "GET"){
//         res.write(JSON.stringify([{ title : "one", status : false}]))    // we cannot send array directly for we need to use JSON.stringify()
//         res.end()
//     }else { 
//         res.write("response from server")
//         res.end()
//     }
   
// }).listen(8000,()=>{
//     console.log("server listening to port",8000)
// })

console.log("hellow change created") 

// this works only after installing bcrypt through terminal
const bcrypt = require("bcrypt")   
// bcrypt.hash(myPlaintextPassword, saltRounds, function(err,hash){});  
// myPlaintextPassword : your password and saltRounds : level of complexity, more value means more complex takes more time
bcrypt.hash("12345678", 10, function(err,hash){  // bcrypt is asynchronous
    // store hash in your password db.
    console.log("err is ",err)
    console.log("hash is ",hash)
});


// const function specifies that the function is a "read-only" function that doesn't modify the object for which it's called.





