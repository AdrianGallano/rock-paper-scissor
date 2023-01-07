// all choices
const choices = document.querySelectorAll("[key-choice]"); 
const compChoices = ["rock", "paper", "scissor"]
//score
let playerScore = 0,
computerScore = 0;

const getComputerChoice = () => {
    return compChoices[Math.floor(Math.random() * 3)];
}


const round = (playerChoice, computerSelection) => {
    let computerChoice = computerSelection()

    if(playerChoice === 'rock' && computerChoice === 'scissor' || 
    playerChoice === 'paper' && computerChoice === 'rock' ||
    playerChoice === 'scissor' && computerChoice === 'paper'){
        playerScore++;
        return `Player won ${playerChoice} beats ${computerChoice}`;
    }else if(playerChoice === computerChoice){
        return `it's a tie!`;
    }else{
        computerScore++;
        return `Computer won ${computerChoice} beats ${playerChoice}`
    }
}

const winner = () => {
    if(playerScore > computerScore){
        return "playerWon"
    }else if(playerScore < computerScore){
        return "computerWon"
    }else{
        return "it's a tie"
    }
}

const game = () => {
    // initial game state
    Array.from(choices).forEach((choice)=>{
        choice.addEventListener("click", () => {
            round(choice.getAttribute("key-choice"), getComputerChoice)
            if(playerScore == 5 || computerScore == 5){
                return winner();
            }
        })
    })

}

game()

// display