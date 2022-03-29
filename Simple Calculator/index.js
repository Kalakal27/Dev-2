const form = document["sec1"]

// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     document.getElementById("add", function(){
//         num1 = parseInt(num1);
//         num2 = parseInt(num2);
//     }

// )}    )
const addBtn = document.getElementById('add')
addBtn.addEventListener('click', function(e){
    e.preventDefault()
    const num1 = form.A.value
    const num2 = form.B.value
    let sum = Number(num1) + Number(num2)
    const result = document.getElementById('result')
    result.textContent = sum

})

const subBtn = document.getElementById('subtract')
subBtn.addEventListener('click', function(e){
e.preventDefault()
const num3 = form.C.value
const num4 = form.D.value
let sum = Number(num3) - Number(num4)
const result = document.getElementById('subResult')
result.textContent = sum
})

const mulBtn = document.getElementById('multiply')
mulBtn.addEventListener('click', function(e){
    e.preventDefault()
    const num5 = form.E.value
    const num6 = form.F.value
    let sum = Number(num5) * Number(num6)
    const result = document.getElementById('multiResult')
    result.textContent = sum
})