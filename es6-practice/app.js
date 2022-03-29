// task1

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr((carrot) => ({
         type: "carrot", name: carrot 
    }))
};
console.log(carrots)

// task2

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
];

// task3

function filterForFriendly(arr) {
    return arr((person) => ({
         person , friendly
    }))
}
console.log(people)


let doMathSum = (a, b) => a+b;
    

let produceProduct = (a, b) => a*b;


// task4

function printString(first = "Jane", last = "Doe", age = 100){
     return "Hi" + first  +  last + "," + 'how does it feel to be ' + age + "?"
 }
 console.log(printString(' Jane '))

//  task5

 const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 
//  function filterForDogs(arr) {
//      return arr.filter(animal => {
//          if (animal.type === "dog") {
//              return true
//          } else {
//              return false
//          }
//      })
//  }
  console.log(animals)