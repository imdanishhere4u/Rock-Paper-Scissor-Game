let content = document.querySelector(".content");
let score = document.querySelector(".score");
let computerScoreJs =document.querySelector("#computerScore");
let userScoreJs= document.querySelector("#userScore");
let resultJs=document.querySelector("#resultShow");
let restartGame=document.querySelector("#reStart");
let startGame=document.querySelector("#startgame");

content.style.display = "none";
score.style.display = "none";
resultJs.style.display = "none";
restartGame.style.display = "none";

const choice = ["stone", "paper", "scissor"];

let userScore=0;
let computerScore = 0;
let round=0;
let maxRound=10;

let userSelection;
let computerSelection;

startGame.addEventListener("click",()=>{
   startGame.style.display="none";

   content.style.display = "flex";
   score.style.display = "flex";
   resultJs.style.display = "inline-block";
   restartGame.style.display = "inline-block";

  userScore=0;
  computerScore=0;
  round=0;

  computerScoreJs.innerText=0;
  userScoreJs.innerText=0;

  resultJs.innerText="Let's Start Game !";
  resultJs.style.color="black";
  resultJs.style.backgroundColor="white";
})

function Score(){
   if(userSelection === computerSelection) {
    console.log("Draw");
    resultJs.innerText="Game is Draw ! ";
      resultJs.style.backgroundColor="blue";
      resultJs.style.color="white";
  } else if (userSelection === "stone") {
    if (computerSelection === "paper") {
      computerScore++;
      resultJs.innerText="You Lose ! , Computer is win the Round "
      resultJs.style.backgroundColor="red";
      resultJs.style.color="white";
      console.log("computer is win");
    } else if (computerSelection === "scissor") {
      userScore++;
      resultJs.innerText=" Congratulation ! , You win the Round ";
      resultJs.style.backgroundColor="green";
      resultJs.style.color="white";
      console.log("user is win");
    }
  } else if (userSelection === "paper") {
    if (computerSelection === "stone") {
      userScore++;
      resultJs.innerText=" Congratulation ! , You win the Round ";
      resultJs.style.backgroundColor="green";
      resultJs.style.color="white";
      console.log("user is win");
    } else if (computerSelection === "scissor") {
      computerScore++;
      resultJs.innerText="You Lose ! , Computer is win the Round "
      resultJs.style.backgroundColor="red";
      resultJs.style.color="white";
      console.log("computer is win");
    }
  } else if (userSelection === "scissor") {
    if (computerSelection === "stone") {
      computerScore++;
      resultJs.innerText="You Lose ! , Computer is win the Round "
      resultJs.style.backgroundColor="red";
      resultJs.style.color="white";
      console.log("computer is win");
    } else if (computerSelection === "paper") {
      userScore++;
      resultJs.innerText=" Congratulation ! , You win the Round ";
      resultJs.style.backgroundColor="green";
      resultJs.style.color="white";
      console.log("user is win");
    }
  }
  
  userScoreJs.innerText=userScore;
  computerScoreJs.innerText=computerScore;
}

restartGame.addEventListener("click",()=>{
  userScore=0;
  computerScore=0;
  round=0;

  computerScoreJs.innerText=0;
  userScoreJs.innerText=0;

  resultJs.innerText="Again , Let's Start Game !";
  resultJs.style.color="black";
  resultJs.style.backgroundColor="white";

  startGame.style.display = "inline-block";

  content.style.display = "none";
  score.style.display = "none";
  resultJs.style.display = "none";
  restartGame.style.display = "none";

});
function game() {
    content.addEventListener("click", (event) => {
       if(round>=maxRound){
      return;
    }

    userSelection=event.target.dataset.choice;
    console.log("user choice:",userSelection);

    computerSelection = choice[Math.floor(Math.random() * choice.length)];
    console.log("Computer chose:", computerSelection);

    Score();
    round++;

    if(round===maxRound){
  if(userScore>computerScore){
    resultJs.innerText=" 🏆Congratulations ! , You win the Match  "
    resultJs.style.backgroundColor="green";
  }
  else if(userScore<computerScore){
    resultJs.innerText=" 💻Try Again ! You Loose The Match "
     resultJs.style.backgroundColor="red";
  }
  else if (userScore===computerScore){
    resultJs.innerText=" 🤝 Match is Draw"
    resultJs.style.color="white";
  }
  content.style.display = "none";
  score.style.display = "none";
  restartGame.style.display = "none";
  startGame.style.display = "inline-block";
}
  });
  
  }

game();