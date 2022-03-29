




const list = document.list
const title = list.title
const price = list.price
const descrip = list.descrip
const image = list.image

function get(){
    axios.get("https://api.vschool.io/timothymott/todo")
    .then(res => info(res.data))
    .catch(error => console.log(error))
}
function info(data){
    for(let i=0; i < data.length; i++){
        console.log(data[i])

        const container = document.createElement("div")
        const h1 = document.createElement("h1")
        h1.textContent = data[i].title
        container.appendChild(h1)

        const paragon = document.createElement("h2")
        paragon.textContent = data[i].price
        container.appendChild(paragon)

        const sylwinder = document.createElement("h3")
        sylwinder.textContent = data[i].description
        container.appendChild(sylwinder)
        
        const painter = document.createElement("img")
        if(data[i].imgUrl){
            painter.src= data[i].imgUrl
        }
        container.appendChild(painter)
        console.log(painter, sylwinder)

        const check = document.createElement("input")
        check.setAttribute("type", "checkbox")
        container.appendChild(check)

        check.addEventListener("click", function(e){
            axios.put("https://api.vschool.io/timothymott/todo/" + data[i]._id,{
                completed: check.checked
            })
            // console.log(check)
            .then(res => {
                if(check.checked){
                    container.style.textDecoration = "line-through"
                    completed = true
                    console.log(check.checked)
                }
                else{
                    container.style.textDecoration = "none"
                    completed = false
                }
            })
            .catch(error => console.log(error))
            
        })
        document.getElementById("todoInfo").appendChild(container)
        const deleteButton = document.createElement("button")
        deleteButton.innerHTML = "delete"
        deleteButton.addEventListener("click", function(e) {
            axios.delete("https://api.vschool.io/timothymott/todo/" + data[i]._id)
            .then(res => document.getElementById("todoInfo").removeChild(container))
            .catch(error => console.log(error))
        })
        container.appendChild(deleteButton)
    }
}
 get()
 list.addEventListener("submit", function(e){
     e.preventDefault()
     const draconis = {
      title: title.value,
      price: price.value,
      description: descrip.value,
      imgUrl: image.value,
     }
    //  console.log(draconis)
     axios.post("https://api.vschool.io/timothymott/todo", draconis)
     .then(res => {
        //  console.log(res)
         info([res.data])
        })
     .catch(error => console.log(error))
     
 })
 
  