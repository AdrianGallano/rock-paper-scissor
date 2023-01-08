'use strict'

let playerScore = 0,
computerScore = 0,
roundNumber = 1;

// GUI
const scoreboard = document.getElementsByClassName("scoreboard");
const playChoice = document.getElementsByClassName("play-choice");
const popup = document.getElementsByClassName("pop-up")[0];
const roundGUI = document.getElementById("round");
const state = document.getElementById("state");
const playAgain = document.getElementById("play-again");
const whoWon = document.getElementById("won");
const choices = document.querySelectorAll("[key-choice]"); 

const getComputerChoice = () => {
    return ["rock", "paper", "scissor"][Math.floor(Math.random() * 3)];
}

const round = (playerChoice, computerChoice) => {

    
    if(playerChoice === 'rock' && computerChoice === 'scissor' || 
    playerChoice === 'paper' && computerChoice === 'rock' ||
    playerChoice === 'scissor' && computerChoice === 'paper'){
        playerScore++;
        displayState(`Player won ${playerChoice} beats ${computerChoice}`);
    }else if(playerChoice === computerChoice){
        displayState(`it's a tie!`);
    }else{
        computerScore++;
        displayState(`Computer won ${computerChoice} beats ${playerChoice}`);
    }

    displaySelection(playerChoice, computerChoice)
    roundNumber++;
}

const winner = () => {

    if(playerScore > computerScore){
        return "Player Wins";
    }else if(playerScore < computerScore){
        return "Computer Wins";
    }

}

const displayRound = (roundNum) => {
    roundGUI.textContent = `Round ${roundNum}`;
}

const displayScore = () => {
    scoreboard[0].textContent = `Player - ${playerScore}`;
    scoreboard[1].textContent = `Computer - ${computerScore}`;
}

const displayState = (status) => {
    state.textContent = status;
}

const displaySelection = (pChoice, cChoice) => {
    playChoice[0].src = `./static/images/${pChoice}.png`;
    playChoice[1].src = `./static/images/${cChoice}.png`;
}

const displayPopUp = (won) => {
    popup.style.display = "flex";
    whoWon.textContent = won;
}

const reset = () => {

    playerScore = 0;
    computerScore = 0;
    roundNumber = 1;
    displayScore();
    displayRound(roundNumber);
    displaySelection("rock-paper-scissors-battle", "rock-paper-scissors-battle");
    popup.style.display = "none";
    state.textContent = "race to 5!"
}

const game = () => {
    Array.from(choices).forEach((choice)=>{
        choice.addEventListener("click", () => {
            round(choice.getAttribute("key-choice"), getComputerChoice())
            
            displayScore()
            displayRound(roundNumber)
            
            if(playerScore == 5 || computerScore == 5){
                displayPopUp(winner())
            }
        })
    })

    playAgain.addEventListener("click", () => reset())
}
game()