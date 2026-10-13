let content = document.querySelector(".content");
let score = document.querySelector(".score");
let computerScoreJs =document.querySelector("#computerScore");
let userScoreJs= document.querySelector("#userScore");
let resultJs=document.querySelector("#resultShow");
let restartGame=document.querySelector("#reStart");

const choice = ["stone", "paper", "scissor"];

let userScore=0;
let computerScore = 0;

let userSelection;
let computerSelection;

  restartGame.addEventListener("click",()=>{
    console.log("hello");
    userScoreJs.innerText=0;
    computerScoreJs.innerText=0;
    resultJs.innerText="Let's Start a new Game !"
    resultJs.style.backgroundColor="white";
    resultJs.style.color="black";
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

function game() {
    content.addEventListener("click", (event) => {

    userSelection=event.target.dataset.choice;
    console.log("user choice:",userSelection);

    computerSelection = choice[Math.floor(Math.random() * choice.length)];
    console.log("Computer chose:", computerSelection);

    Score();
  });
  
  }

game();