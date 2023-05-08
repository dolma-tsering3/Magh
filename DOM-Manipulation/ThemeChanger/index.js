


// document.getElementById("lightBtn").addEventListener("click", () => {
//     document.getElementsByTagName("body")[0].classList.remove("dark")
//      //when clicking lightBtn, class="dark" from body is removed which will remove all the styles set for dark class
// })

// document.getElementById("darkBtn").addEventListener("click", () => {
//     document.getElementsByTagName("body")[0].classList.add("dark")
//     // when clicking the darkBtn, class="dark" is added in body then its styles are again applied.
// })


let default_theme = "darkB" 
document.getElementById("toggleBtn").addEventListener("click", () => {
  document.getElementsByTagName("body")[0].classList.toggle("dark") // class="dark" in body gets toggled(ie dark class gets added then removed and vice-versa).
  // bydefault it is light so  button text darkB. when toggled, darkB text in button changes
  // to lightB  and vice-versa
  if(default_theme=="darkB"){
    default_theme="lightB" 
    }else{
    default_theme="darkB"
  }
  document.getElementById("toggleBtn").innerText = default_theme
})


