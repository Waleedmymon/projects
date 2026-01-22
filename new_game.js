let userScore = 0;
let comScore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let userpara= document.querySelector("#user-score");
let compara= document.querySelector("#com-score");

let genComchoice =()=>{
    let options= ["rock", "paper", "Sciesor"]
    let ranInd= Math.floor(Math.random()*3)
    return options[ranInd]
}


let drawGame = ()=>{
    console.log("game was draw")
    msg.innerText = "game was drwa!.play again"
    msg.style.backgroundColor = "darkblue";

}
const showWinner =(userWin, userChoice, comChoice)=>{
     if(userWin){
        userScore ++;
        userpara.innerText = userScore;
        console.log("you win!")
        msg.innerText = `you are win! ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor = "green";
     }
     else{
        comScore ++;
        compara.innerText = comScore;
        console.log("you are loss!")
        msg.innerText = `you lost! ${comChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        
     }
}

let playGame = (userChoice)=>{
console.log("user choice", userChoice);
//gen comchoice
let comChoice = genComchoice();
console.log("com choice", comChoice);
if(userChoice === comChoice){
    drawGame();
}
else{
    let userWin = true;
    if(userChoice === "rock"){
        //comchoice paper, sciesor
        userWin= comChoice === "paper"? false:true;
    }
    else if(userChoice === "paper"){
        //comchoice rock and sciesor
        userWin = comChoice ==="sciesor"?false : true;
    }
    else{
        //comchoice rock and paper
        userWin = comChoice === "rock"? false :true;
    }
    showWinner(userWin,userChoice,comChoice);
}
} 

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        
    })
})