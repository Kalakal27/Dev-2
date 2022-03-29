const letters = ['s', 'f', 'r', 'k', 'l', 'j']
const numbers = [10, 5, 6, 8, 7, 9, 1, 4, 2, 3]
const objects = ["laptop", "controller", "console", "television"]
const nage =[{name:"Timothy", age:  21}, {name:"Maxine", age:20}, {name:"Laura", age:22}]


const p1 = numbers.sort(function(a,b) {{
      return a === b ? 0 : a < b ? -1 : 1;
    };
  }
)
console.log(p1)

const p2 = numbers.sort(function(a,b){
    return a === b ? 0 : a < b ? 1:-1
})
console.log(p2)

 const p3 = objects.sort(function(a,b){
     if(a.length < b.length)
     return 1;
     else(a.length > b.length)
     return -1;
 })
 console.log(p3)


const p4 = letters.sort(function(a,b) {{
    return a === b ? 0 : a < b ? -1 : 1;
  };
}
)
console.log(p4)

const p5 = nage.sort(function(a, b){
if(a.age < b.age)
return -1;
else(a.age > b.age)
return 1;
    
})
console.log(p5)