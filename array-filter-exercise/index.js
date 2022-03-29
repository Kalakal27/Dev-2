const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const result = arr.filter(x => x%2 === 0 ? 'x' : '')
console.log(result)
const animal = ["rattlesnake", "polarbear", "dog", "aragog"]
const nage =[{name:"Timothy", age:  21}, {name:"Maxine", age:17}, {name:"Laura", age:22}]

const illuminati= [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]

const movies = [
    { name: "movie1", genre: "horror" },
    { name: "movie2", genre: "action" },
    { name: "movie3", genre: "action" },
    { name: "movie4", genre: "fantasy" }
    ]
     const rez = movies.filter(x => x.genre === 'action')
     console.log(rez)

const p1=arr.filter(function(gt5){
    
        return gt5 >= 5
    
})
console.log(p1)

const p2 = arr.filter(function(even){
    if(even %2=== 0)
    return even
})
console.log(p2)

const p3 = animal.filter(function(mov){
   if(mov.length >= 5)
   return mov
})
console.log(p3)

const p4 = illuminati.filter(function(belong){
    if(belong.member)
    return belong
})  
    console.log(p4)

const p5 = nage.filter(function(agelimit){
    if(agelimit.age >= 18 )
    return agelimit
})
console.log(p5)

