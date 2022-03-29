// function collectAnimals(...animals){
//     console.log(animals);
// }
// collectAnimals("bunny", "wolf", "elephant", "lion");



// function combineFruit(fruit, sweets, vegetables){
//     console.log(fruit {item}, sweets, vegetables )
// }

// combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrot"])



// function parseSentence({location, duration}){
//     console.log(`We're going to have a good time in ${location} for ${duration}`)
//   }
  
//   parseSentence({
//     location: "Burly Idaho",
//     duration: "2 weeks"
//   });

// function returnFirst(items){
//     const firstItem = items[0];
//     firstItem.items[0] /*change this line to be es6*/
//     return firstItem
// }

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(){
    const [firstFav, secondFav, thirdFav] = favoriteActivities
    console.log(`My top three favorite activities are, ${firstFav},  ${secondFav} and  ${thirdFav}`)
}

// function returnFavorites(favorite){
//     const [firstFav, secondFav, thirdFav] = favorite 
//     return `My top three favorite activities are, ${firstFav},  ${secondFav} and  ${thirdFav}`
// }
// console.log(returnFavorites(favoriteActivities))

// function combineAnimals() {

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];



//  combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals);
// const all = {...realAnimals, ...magicalAnimals, ...mysteriousAnimals};
// console.log(all)

function combineAnimals(array1, array2, array3) {
    return array1.concat(...array2, ...array3)


}



const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];
console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))



const product = (a, ...b) =>{
    const numbers = [a, ...b]
    return numbers.reduce((acc, number) => acc * number,1)
}
console.log(product(1, 3, 4, 5, 6))


const unshift = (array, ...second) =>{
    return array.concat(...second)
}
console.log(unshift(["a", "b", "c", "d", "e"], ["a", "b", "c"]))


const populatePeople = (names) =>{
    return names.map((name)=>{
        name = name.split(" ")
        const[firstName, lastName] = [...name]
        const person = {
            firstName,
            lastName
        }
        return person
    })
}
console.log(populatePeople(["Maxine Jones", "Timothy Mott", "Spicy Doritos"]))
