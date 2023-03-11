
let playerScoreBoardEl = document.getElementById("playerScoreBoard-el")
let computerScoreBoardEl = document.getElementById("computerScoreBoard-el")
let computerChoiceEl = document.getElementById("computerChoice-el")
let playerChoiceEl = document.getElementById("playerChoice-el")
let resultEl = document.getElementById("result-el")

let playerChoice = " "
let randomComputerChoices = " " 
let playerScore = 0
let computerScore = 0


function buttonRock(){
    playerChoice =  "Rock"
    playerChoiceEl.textContent = "Player:" + " " + "Rock"
    computerChoice()
    result()
    
}
function buttonScissors(){
    playerChoice = "Scissors"
    playerChoiceEl.textContent = "Player:" + " " + "Scissors"
    computerChoice() 
    result()
}

function buttonPaper(){
    playerChoice = "Paper"
    playerChoiceEl.textContent = "Player:" + " " + "Paper"
    computerChoice()
    result()
    
}

function computerChoice(){

    randomComputerChoices =  Math.floor( Math.random() * 3) + 1

       if (randomComputerChoices > 2) {
        randomComputerChoices = "Rock"
        computerChoiceEl.textContent = "Computer:" + " " + "Rock"
      
    } else if (randomComputerChoices === 1){
        randomComputerChoices = "Scissors"
        computerChoiceEl.textContent = "Computer:" + " " + "Scissors"
        
    } else {
        randomComputerChoices = "Paper"
        computerChoiceEl.textContent = "Computer:" + " " + "Paper"
        
    }   

}

function result(){
    
    if (randomComputerChoices == playerChoice){
        resultEl.textContent = "Tie!"

    }else if(playerChoice == "Rock"){
        if(randomComputerChoices == "Paper"){
            resultEl.textContent = "Computer Won";
            computerScore++;
            computerScoreBoardEl.textContent = "Computer Score: " + computerScore;
        }else{
            resultEl.textContent == "You Won"
            playerScore++;
            playerScoreBoardEl.textContent = "Your Score: " + playerScore;
        }
    }
    else if(playerChoice == "Scissors"){
        if(randomComputerChoices == "Rock"){
            resultEl.textContent = "Computer Won";
            computerScore++;
            computerScoreBoardEl.textContent = "Computer Score: " + computerScore;
        }else{
            resultEl.textContent = "You Won";
            playerScore++;
            playerScoreBoardEl.textContent = "Your Score: " + playerScore;
        }
    }
    else if(playerChoice == "Paper"){
        if(randomComputerChoices == "Scissors"){
            resultEl.textContent = "Computer Won";
            computerScore++;
            computerScoreBoardEl.textContent = "Computer Score: " + computerScore;
        }else{
            resultEl.textContent = "You Won";
            playerScore++;
            playerScoreBoardEl.textContent = "Your Score: " + playerScore;
        }
    }
    console.log(randomComputerChoices)
    console.log(playerChoice)
}


