const numbers = [1 ,2 , 4 ,1]

const voters = 
    [{name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}]


const wishlist = [{name:"laptop", price:985}, {name:"Flatscreen", price:1500}, {name:"console", price:900}]

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

const p1 = numbers.reduce(function(final, numbers){
  final += numbers
  return final
})
console.log(p1)

const p2 = numbers.reduce(function(final, numbers){
  return final + ', ' + numbers;
})
console.log(p2)

const p3 = voters.reduce(function(final, voter){
 if(voter.voted){
     final++
 }
 return final
}, 0);
console.log(p3)

const p4 = wishlist.reduce(function(final,wishlist){
   final += wishlist.price
   return final
}, 0);
console.log(p4)

const p5 = arrays.reduce(function(final, array){
    final=array.concat(numbers, arrays)
    return final
}, 0);
console.log(p5)

 const p6 = voters.reduce(function(final, voter){
     if((voter.age <= 25&& voter.age >= 18) && voter.voted){
       final.numYoungVotes++
     }

     if(voter.age <= 25&& voter.age >=18){
         final.numYoungPeople++
     }
        
        
     if((voter.age >= 26&& voter.age <= 35) && voter.voted){
         final.numMidVotesPeople++
     }

     if(voter.age >=26&& voter.age <= 35){
         final.numMidPeople++
     }
       
     if((voter.age >=36&& voter.age <= 55)&& voter.voted){
         final.numOldVotes++
      }
     
     if(voter.age >=36&& voter.age <= 55){
         final.numOldPeople++
     }

      

      
     return final
 }, { numYoungPeople: 0, numYoungVotes: 0, numMidPeople: 0, numMidVotesPeople: 0, numOldPeople: 0, numOldVotes: 0  })
 console.log(p6)
