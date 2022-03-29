let count = 0;
const save = document.getElementById("save")
let history = document.getElementById("tracker")
let pls = document.getElementById('helpMe')

const clickBtn = document.getElementById("clicker")
clickBtn.addEventListener("click", function(e){
   e.preventDefault()
   const test = history.innerHTML++
   localStorage.setItem("amount", test)
   console.log("click")
    
   
})
let struggle = document.createElement('h2')
function storage(){
   struggle.textContent = localStorage.getItem('amount')
   const saved = localStorage.getItem('amount')
   console.log("num", saved)
   localStorage.setItem("clik", saved)
   
}
const begginer = localStorage.getItem("clik")

// if(begginer){
//   begginer.textContent = clik 
// }
pls.append(begginer)
const plsFinal = document.getElementById("save")
plsFinal.addEventListener("click", storage)
