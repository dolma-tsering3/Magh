/*
Switch syantax:
switch(value){
    case <condition> : {
              do-task
    }
}
*/

let checkMonth = (input) => {   // arrow function
let month
switch (input) {
    case 1: {
        month = "jan"
        break;
    }
    case 2: {
        month = "feb"
        break;
    }
    case 3: {
        month = "mar"
        break;
    }
    case 4: {
        month = "apr"
        break;
    }
    case 5: {
        month = "may"
        break;
    }
    case 6: {
        month = "jun"
        break;
    }
    case 7: {
        month = "jul"
        break;
    }
    case 8: {
        month = "aug"
        break;
    }
    case 9: {
        month = "sep"
        break;
    }
    case 10: {
        month = "oct"
        break;
    }
    case 11: {
        month = "nov"
        break;
    }
    case 12: {
        month = "dec"
        break;
    }
   default : {
        console.log(" Please input valid data.")

    }
}
if(month){
console.log({month})  // output : { month: 'sep' }
console.log(month)  // output : sep
}
}
checkMonth(9)

/*
False value
    - false
    - 0
    - null
    - undefined
    - NaN
    - ""

 if(0) gives false

*/