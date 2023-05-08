// to use auth.js file: importing here and exporting in auth.js is required
// const signupUser = require("./auth/auth")  // default import
// const login = require("./auth/auth")

const reset = require("./auth/auth")
// better way to import is:
const {signupUser,login} = require("./auth/auth");  // this returns object that has signupUser & login

signupUser()
login()
reset()

// to run in terminal: nodemon import.js


/*
Import export types :-
 - common JS : require  // for express
 - ES module : import   // for react
*/