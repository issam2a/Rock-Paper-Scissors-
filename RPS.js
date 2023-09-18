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
  function PlayRound(computerSelection, playerSelection) {
    if (
      playerSelection === "rock" ||
      playerSelection === "paper" ||
      playerSelection === "scissors"
    ) {
      if (computerSelection === playerSelection) {
        console.log(`tie ... 
                computer :${computerSelection}, computer score :${computerScore}
                player selection : ${playerSelection} , player score : ${playerScore}`);
      } else if (computerSelection === "paper" && playerSelection === "rock") {
        computerScore++;
        console.log(`computer :${computerSelection} computer score: ${computerScore}
            player : ${playerSelection} player score : ${playerScore}
            You loss ! ${computerSelection} beats ${playerSelection} `);
      } else if (
        computerSelection === "rock" &&
        playerSelection === "scissors"
      ) {
        computerScore++;
        console.log(`computer :${computerSelection} computer score: ${computerScore}
            player : ${playerSelection} player score : ${playerScore}
            You loss ! ${computerSelection} beats ${playerSelection} `);
      } else if (
        computerSelection === "scissors" &&
        playerSelection === "paper"
      ) {
        computerScore++;
        console.log(`computer :${computerSelection} computer score: ${computerScore}
            player : ${playerSelection} player score : ${playerScore}
            You loss ! ${computerSelection} beats ${playerSelection} `);
      } else if (
        computerSelection === "paper" &&
        playerSelection === "scissors"
      ) {
        computerScore++;
        console.log(`computer :${computerSelection} computer score: ${computerScore}
            player : ${playerSelection} player score : ${playerScore}
            You win ! ${playerSelection} beats ${computerSelection} `);
      } else if (computerSelection === "rock" && playerSelection === "paper") {
        computerScore++;
        console.log(`computer :${computerSelection} computer score: ${computerScore}
            player : ${playerSelection} player score : ${playerScore}
            You win ! ${playerSelection} beats ${computerSelection} `);
      } else if (
        computerSelection === "scissors" &&
        playerSelection === "rock"
      ) {
        computerScore++;
        console.log(`computer :${computerSelection} computer score: ${computerScore}
            player : ${playerSelection} player score : ${playerScore}
            You win ! ${playerSelection} beats ${computerSelection} `);
      }
    } else {
      alert("Enter the right weapon !!");
    }
    PlayRound(computerSelection, playerSelection);
  }
}
if (playerScore > computerScore) {
  console.log(
    `you are victoris , your score is : ${playerScore} computer score is :${computerScore}`
  );
} else {
  console.log(
    ` you lost the war with machines your score is : ${playerScore} computer score is :${computerScore}`
  );
}
