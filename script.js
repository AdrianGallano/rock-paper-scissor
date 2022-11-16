
let choices = ["rock", "paper", "scissor"]

const getComputerChoice = () => {
    return choices[Math.floor(Math.random() * 3)];
}

const getPlayerChoice = () => {
    return (prompt(`Please enter your choice (${choices.join(", ")}): `)).toLowerCase()
}

const round = (playerSelection, computerSelection) => {
    let playerChoice = playerSelection()
    let computerChoice = computerSelection()

    return  playerChoice === 'rock' && computerChoice === 'scissor' || 
    playerChoice === 'paper' && computerChoice === 'rock' ||
    playerChoice === 'scissor' && computerChoice === 'paper' ? `Player won ${playerChoice} beats ${computerChoice}` 
    : playerChoice === computerChoice ? `it's a tie!` : `Computer won ${computerChoice} beats ${playerChoice}`
}

const game = () => {
    let playerScore = 0,
    computerScore = 0;
    for(let i = 0; i < 5; i++){
        let result = round(getPlayerChoice, getComputerChoice)
        if(result.includes("Player")){
            console.log(result)
            playerScore++
        }else if(result.includes("Computer")){
            console.log(result)
            computerScore++
        }else{
            console.log(result)
        }
    }

    if(playerScore > computerScore){
        return "playerWon"
    }else if(playerScore < computerScore){
        return "computerWon"
    }else{
        return "it's a tie"
    }
}

let result = game()
console.log(result)