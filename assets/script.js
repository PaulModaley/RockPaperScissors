//Variables

const computerChoiceDisplay = document.getElementById('computer-choice')
const playerChoiceDisplay = document.getElementById('player-choice')
const result = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let playerChoice
let computerChoice

// Click event listener

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerChoice = e.target.id
    playerChoiceDisplay.innerHTML = playerChoice
    generateComputerChoice
}))

//function for computer's choice
function generateComputerChoice () {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) +1

    if (randomNumber = 1) {
        computerChoice = 'rock'
    }
    if (randomNumber = 2) {
        computerChoice = 'paper'
    }
    if (randomNumber = 3) {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
} 