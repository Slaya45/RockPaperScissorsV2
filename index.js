let matchCountEL = document.getElementById("matchCount-el")
let playerScoreBoardEl = document.getElementById("playerScoreBoard-el")
let computerScoreBoardEl = document.getElementById("computerScoreBoard-el")
let computerChoiceEl = document.getElementById("computerChoice-el")
let playerChoiceEl = document.getElementById("playerChoice-el")
let resultEl = document.getElementById("result-el")
const button1 = document.querySelectorAll("button")


let playerChoice = " "
let randomComputerChoices = " " 
let playerScore = 0
let computerScore = 0
let matchCount = 1



function matchLimiter(){

    if (matchCount <= 6){
        button1.disabled = false
    } else {
        button1.disabled = true
    }
}
 




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
    matchCountEL.textContent = "Match Count: " + matchCount
    console.log(matchCount)

    if (randomComputerChoices == playerChoice){
        resultEl.textContent = "Tie!"
        matchCount++;

    }else if(playerChoice == "Rock"){
        if(randomComputerChoices == "Paper"){
            resultEl.textContent = "Computer Won";
            computerScore++;
            matchCount++;
            computerScoreBoardEl.textContent = "Computer Score: " + computerScore;
        }else{
            resultEl.textContent == "You Won"
            playerScore++;
            matchCount++;
            playerScoreBoardEl.textContent = "Your Score: " + playerScore;
        }
    }
    else if(playerChoice == "Scissors"){
        if(randomComputerChoices == "Rock"){
            resultEl.textContent = "Computer Won";
            computerScore++;
            matchCount++;
            computerScoreBoardEl.textContent = "Computer Score: " + computerScore;
        }else{
            resultEl.textContent = "You Won";
            playerScore++;
            matchCount++;
            playerScoreBoardEl.textContent = "Your Score: " + playerScore;
        }
    }
    else if(playerChoice == "Paper"){
        if(randomComputerChoices == "Scissors"){
            resultEl.textContent = "Computer Won";
            computerScore++;
            matchCount++;
            computerScoreBoardEl.textContent = "Computer Score: " + computerScore;
        }else{
            resultEl.textContent = "You Won";
            playerScore++;
            matchCount++;
            playerScoreBoardEl.textContent = "Your Score: " + playerScore;
        }
    }
    console.log(randomComputerChoices)
    console.log(playerChoice)
    console.log(matchLimiter)
}


