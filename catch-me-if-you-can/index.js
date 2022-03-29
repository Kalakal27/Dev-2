var user = {username: "sam", password: "123abc"};

function login(username, password){
try{
  if(!username === user.username){

     throw new Error( "incorrect username")
  }
    else if(!password === user.password){

    throw new Error("incorrect password")
  }

 }
    catch(err){
      console.log("error")
    }
  }
console.log(login('sa','abc'))






// function sum(x, y){
//     return x + y;
//   }
 
//   try{
//       if(num === false)
//       throw "hey i am an error"
//       sum(1, 2)
//   }
//   catch(err){
//      console.log("error")
//   }


