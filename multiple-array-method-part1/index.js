var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]
function getSorted(){
  return peopleArray.filter(function(older){
     if(older.age > 18){
     return older
     }
   }).sort(function(a, b){
        if(a.lastName <= b.lastName)
        return -1; 1
    }).map(function(person){
        return "<li>" + person.firstName + person.lastName + person.age + "</li>"
   
    })
}
console.log(getSorted(peopleArray))





