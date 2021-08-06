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
  //function including 'if' statements for game outcome. SCORING NEEDS WORK!
  function getResult() {
    if (computerChoice === userChoice) {
      result = 'its a draw!'
    } 
    if (computerChoice === 'Rock' && userChoice === 'Paper') {
      result = 'you win!'
      document.getElementById('user-score').innerText = ++userScore
    }
    if (computerChoice === 'Rock' && userChoice === 'Scissors') {
      result = 'you lost!'
      parseInt(document.getElementById('computer-score').innerText) = ++computerScore
    }
    if (computerChoice === 'Paper' && userChoice === 'Scissors') {
      result = 'you win!'
      parseInt(document.getElementById('user-score').innerText) = ++userScore
    }
    if (computerChoice === 'Paper' && userChoice === 'Rock') {
      result = 'you lose!'
      parseInt(document.getElementById('computer-score').innerText) = ++computerScore
    }
    if (computerChoice === 'Scissors' && userChoice === 'Rock') {
      result = 'you win!'
      parseInt(document.getElementById('user-score').innerText) = ++userScore
    }
    if (computerChoice === 'Scissors' && userChoice === 'Paper') {
      result = 'you lose!'
      parseInt(document.getElementById('computer-score').innerText) = ++computerScore
    }
    resultDisplay.innerHTML = result
  }
