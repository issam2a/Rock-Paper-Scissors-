let playerScore = 0;
let computerScore = 0;

for (let i = 0; i < 10 && playerScore <= 3 && computerScore <= 3; i++) {
  const player = getPlayerSelection();
  const computer = getComputerSelection();
  function getComputerSelection() {
    const computerSelection = ["Rock", "paper", "Scissors"];
    return computerSelection[
      Math.floor(Math.random() * computerSelection.length)
    ].toLowerCase();
  }
  function getPlayerSelection() {
    let playerSelection = prompt("choose your weapon!!");
    return playerSelection.toLowerCase();
  }
}
