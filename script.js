
const compChoices = ["rock", "paper", "scissor"]
let playerScore = 0,
computerScore = 0;
let roundNumber = 1;

// GUI
const roundGUI = document.getElementById("round")
const scoreboard = document.getElementsByClassName("scoreboard")
const choices = document.querySelectorAll("[key-choice]"); 
const state = document.getElementById("state")
const playChoice = document.getElementsByClassName("play-choice")

const getComputerChoice = () => {
    return compChoices[Math.floor(Math.random() * 3)];
}

const round = (playerChoice, computerSelection) => {
    let computerChoice = computerSelection()
    roundNumber++;
    displaySelection(playerChoice, computerChoice)
    if(playerChoice === 'rock' && computerChoice === 'scissor' || 
    playerChoice === 'paper' && computerChoice === 'rock' ||
    playerChoice === 'scissor' && computerChoice === 'paper'){
        playerScore++;
        displayState(`Player won ${playerChoice} beats ${computerChoice}`);
    }else if(playerChoice === computerChoice){
        displayState(`it's a tie!`);
    }else{
        computerScore++;
        displayState(`Computer won ${computerChoice} beats ${playerChoice}`)
    }
}

const winner = () => {
    if(playerScore > computerScore){
        return "playerWon"
    }else if(playerScore < computerScore){
        return "computerWon"
    }
}

const displayRound = (roundNum) => {
    roundGUI.textContent = `Round ${roundNum}`
}

const displayScore = () => {
    scoreboard[0].textContent = `Player - ${playerScore}`
    scoreboard[1].textContent = `Computer - ${computerScore}`
}

const displayState = (status) => {
    state.textContent = status
}

const displaySelection = (pChoice, cChoice) => {
    playChoice[0].src = `./static/images/${pChoice}.png`
    playChoice[1].src = `./static/images/${cChoice}.png`
}

const reset = () => {
    playerScore = 0
    computerScore = 0
    roundNumber = 1
    state.style.visibility = "hidden"
}


const game = () => {
    // initial game state
    Array.from(choices).forEach((choice)=>{
        choice.addEventListener("click", () => {
            round(choice.getAttribute("key-choice"), getComputerChoice)
            state.style.visibility = "visible"
            displayScore()
            displayRound(roundNumber)
            if(playerScore == 5 || computerScore == 5){
                winner()
                reset()
            }
        })
    })

}

game()

// display