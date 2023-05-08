// using function call
function changeBgColor(){
    console.log("change bg-color")
    // all below three are diff ways for same thing
    let body = document.getElementById("body")
body = document.getElementsByTagName("body")
body = document.querySelector("#body")

let colors = ['red','pink','green','blue','yellow']
 // Math.random() gives value in decimal points ranging zero points somethings.
 // Math.floor(8.9372019289) gives value only before decimal points. i.e 8 here. 
let index = Math.floor(Math.random() * colors.length)  
console.log(index)
body.style.backgroundColor = colors[index]
}

// using id
// click is used as event listener.
document.getElementById('btn')?.addEventListener("click", () => {
    console.log("inside Event Listener")
})
// alert("") // alert windows pop-up


