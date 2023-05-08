
console.log(1)
console.log(2)
console.log(3)
console.log(4)

function changeTheme() {
    console.log("change theme")
}

// asynchronous
setTimeout(changeTheme,5000)  // this will be executed after 5sec and during that time other task will get executed. 

for (let index=0;index<30;index++){
    console.log("index : ",index)
}

