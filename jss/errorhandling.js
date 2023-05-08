
/*  Error Handling : try and catch */

// eg

let a = 1 + 2

function entryDatabase() {
    let c = a+b
    console.log("data-entry");
   
}

try{
   
    entryDatabase()   // put that might have error inside try block
}catch(error){
    console.log("error meesage is : ",error.message);
}

console.log("do other task")