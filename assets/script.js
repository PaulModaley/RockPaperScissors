//variables
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result
let userScore = 0;
let computerScore = 0;




//event listener for clicks
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

//function for computer's choices
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 
    
    if (randomNumber === 1) {
      computerChoice = 'Rock'
    }
    if (randomNumber === 2) {
      computerChoice = 'Scissors'
    }
    if (randomNumber === 3) {
      computerChoice = 'Paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
  }
  //function including 'if' statements for game outcome. 
  function getResult() {
    if (computerChoice === userChoice) {
      result = ' Draw!'
    } 
    if (computerChoice === 'Rock' && userChoice === 'Paper') {
      result = ' You win!'
      document.getElementById('user-score').innerText = ++userScore
      
    }
    if (computerChoice === 'Rock' && userChoice === 'Scissors') {
      result = 'You lose!'
      document.getElementById('computer-score').innerText = ++computerScore
    }
    if (computerChoice === 'Paper' && userChoice === 'Scissors') {
      result = 'You win!'
      document.getElementById('user-score').innerText = ++userScore
    }
    if (computerChoice === 'Paper' && userChoice === 'Rock') {
      result = ' You lose!'
      document.getElementById('computer-score').innerText = ++computerScore
    }
    if (computerChoice === 'Scissors' && userChoice === 'Rock') {
      result = ' You win!'
      document.getElementById('user-score').innerText = ++userScore
    }
    if (computerChoice === 'Scissors' && userChoice === 'Paper') {
      result = 'You lose!'
      document.getElementById('computer-score').innerText = ++computerScore
    }
    resultDisplay.innerHTML = result
  }


