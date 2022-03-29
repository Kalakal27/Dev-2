class Player {
    constructor(name) {
        this.name = name
        this.totalCoins = 0
        this.status = "small"
        this.hasStar = false
        this.gameActive = true

    }


    gotHit(){
        if (this.hasStar) {
            console.log("You used your Star power!");
            this.hasStar = false;
        } 
        else {
            this.status = (this.status === "PowerUp") ? "Big" :
                    (this.status === "Big") ? "Small" : this.endGame();
        }
    }

gotBuff(){
    if (this.status === "big"){
        this.status ="poweredUp"
        this.hasStar = true
    }
    else if (this.status === "small"){
        this.status = "big"
    }
}

addCoin(){
    this.totalCoins += 1
}

print(){console.log(`Name: ${this.name}, Coins: ${this.totalCoins}, Status: ${this.status}, Stars: ${this.hasStar} `)}

endGame(){
    this.gameActive = false
    console.log("you have been slain")
    clearInterval(gameStart)
}

}


const user = new Player("Luigi")

const game =(user) =>{
    let random = Math.ceil(Math.random()*3)
    if(random === 0){
    clearInterval (gameStart)}

    else if(random === 1){
    user.gotHit();
    user.print();
    }

    else if(random === 2){
        user.addCoin();
        user.print();
    }

    else if(random === 3){
        user.gotBuff();
        user.print();
    }
}
   const gameStart = setInterval(()=> game(user), 1500)
