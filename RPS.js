let playerScore = 0;
let computerScore = 0;

for (let i = 0; i < 5 && playerScore <= 3 && computerScore <= 3; i++) {
  const player = getPlayerSelection();
  const computer = getComputerSelection();
  function getComputerSelection() {
    const computerSelection = ["Rock", "paper", "Scissors"];
    return computerSelection[
      Math.floor(Math.random() * computerSelection.length)
    ].toLowerCase();
  }
  function getPlayerSelection() {
    let player = prompt("choose your weapon!!");
    return player;
  }
  function PlayRound(computer, player) {
    if (player === "rock" || player === "paper" || player === "scissors") {
      if (computer === player) {
        console.log(`tie ... 
                computer :${computer}, computer score :${computerScore}
                player selection : ${player} , player score : ${playerScore}`);
      } else if (computer === "paper" && player === "rock") {
        computerScore++;
        console.log(`computer :${computer} computer score: ${computerScore}
            player : ${player} player score : ${playerScore}
            You loss ! ${computer} beats ${player} `);
      } else if (computer === "rock" && player === "scissors") {
        computerScore++;
        console.log(`computer :${computer} computer score: ${computerScore}
            player : ${player} player score : ${playerScore}
            You loss ! ${computer} beats ${player} `);
      } else if (computer === "scissors" && player === "paper") {
        computerScore++;
        console.log(`computer :${computer} computer score: ${computerScore}
            player : ${player} player score : ${playerScore}
            You loss ! ${computer} beats ${player} `);
      } else if (computer === "paper" && player === "scissors") {
        playerScore++;
        console.log(`computer :${computer} computer score: ${computerScore}
            player : ${player} player score : ${playerScore}
            You win ! ${player} beats ${computer} `);
      } else if (computer === "rock" && player === "paper") {
        playerScore++;
        console.log(`computer :${computer} computer score: ${computerScore}
            player : ${player} player score : ${playerScore}
            You win ! ${player} beats ${computer} `);
      } else if (computer === "scissors" && player === "rock") {
        playerScore++;
        console.log(`computer :${computer} computer score: ${computerScore}
            player : ${player} player score : ${playerScore}
            You win ! ${player} beats ${computer} `);
      }
    } else {
      alert("Enter the right weapon !!");
    }
  }
  PlayRound(computer, player);
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
