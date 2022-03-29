const arr =[2, 4, 6, 8]
const names =["timothy", "maxine", "laura"] 
const nage =[{name:"Timothy", age:  21}, {name:"Maxine", age:10}, {name:"Laura", age:22}]

const p1 =arr.map(function(doubles){
    return doubles *2
 })
 console.log(p1) 
 
 const p2 = arr.map(function(stringy){
     return stringy.toString()
 })
 console.log(p2)

 const p3 = names.map(function(capitalized){
     return capitalized.toUpperCase()
 })
 console.log(p3)

 const p4 = nage.map(function(pername){
     return pername.name
 })
 console.log(p4)

 const p5 = nage.map(function(agelimit){
     if(agelimit.age > 20 ){
         return agelimit.name +' can go to Matrix'
        }
    else{
        return agelimit.name +" underaged"
     }
 })
 console.log(p5)

 const p6 = nage.map(function(about){
     console.log("<h1>" + about.name + "</h1>" + "<h2>" + about.age + "</h2>")

 })
