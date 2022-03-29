const form = document["baddieType"]
console.log(form)
const submitBtn = document.getElementById("submit")
const result = document.getElementById("result")
form.addEventListener('submit', function(e){
    e.preventDefault()
    let goomba = form.goomba.value *5
    let bombomb = form.bombomb.value *7
    let cheepcheep = form.cheepcheep.value *11
    let sum = Number(goomba) + Number(bombomb) + Number(cheepcheep)
    // const result = document.getElementsByClassName("result")
    result.textContent = sum.toString()
    console.log(result)
    console.log(sum)
    console.log("test")
})