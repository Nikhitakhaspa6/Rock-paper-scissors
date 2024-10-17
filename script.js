const choices = document.querySelectorAll('.choice');
const resultText = document.getElementById('result-text');
const scoreDisplay = document.getElementById('score');

let playerScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
};

const getResult = (player, computer) => {
  if (player === computer) return 'It\'s a Tie!';
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    playerScore++;
    return 'You Win!';
  } else {
    computerScore++;
    return 'Computer Wins!';
  }
};

choices.forEach(button => {
  button.addEventListener('click', () => {
    const playerChoice = button.getAttribute('data-choice');
    const computerChoice = getComputerChoice();

    const result = getResult(playerChoice, computerChoice);
    resultText.innerText = `You chose ${playerChoice}, Computer chose ${computerChoice}. ${result}`;
    scoreDisplay.innerText = `Player: ${playerScore} | Computer: ${computerScore}`;
  });
});
