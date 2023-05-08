
function signupUser(){

    console.log("signupUser")
    // console.log("request from user");
    // console.log("check if valid or not ");
    // console.log("has password ")
    // console.log("db store ")
  }

  const login = () => {
    console.log("login")
    // console.log("request");
    // console.log("password, email check")
    // console.log("check with db")
  }

  const reset = () => {
    console.log("reset")
  }

  // to make this file re-useable in other files, we need to export from auth.js and then import in that required files.
//   module.exports = signupUser;  // default export
//   module.exports = login;  // default export  
module.exports = reset; // default export

// each file can have only one default export but can have many named export.
// in above default case export login will overwrite the signupUser so better way is :

// module.exports.signupUser = signupUser;  // named export
// module.exports.login = login;  // named export

// above named export can also be done as
module.exports = {
    signupUser : signupUser,
    login : login
}


