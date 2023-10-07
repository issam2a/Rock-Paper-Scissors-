const player = getPlayerSelection();
const computer = getComputerSelection();
let result = ``;

let playerScore = 0;
let computerScore = 0;
let roundsCount = 0;
let containerDiv = document.querySelector(".container");
let mainDiv = document.querySelector(".mainDiv");
let start = document.querySelector(".start");
let endButton = document.querySelector(".cancel");
let resetButton = document.querySelector(".reset");
let HumanScore = document.querySelector(".HumanScore");
let MachineScore = document.querySelector(".Machine");
let startBtn = document.querySelector(".startBtn");
let root = document.querySelector(":root");
let rootStyle = getComputedStyle(root);
let display = rootStyle.getPropertyValue("--show");
let hide = rootStyle.getPropertyValue("--hide");
let buttons = document.querySelectorAll(".Btn");
let finalResultDiv = document.createElement("div");
finalResultDiv.classList.add("finalResult");
let newSpan = document.createElement("span");
newSpan.classList.add("spanText");
let roundResult = document.createElement("div");
roundResult.classList.add("roundResult");

endButton.addEventListener("click", () => {
  finalResultDiv.remove();
  playerScore = 0;
  computerScore = 0;
  roundsCount = 0;
  root.style.setProperty("--gridNone", "none");
  endGame();
});

startBtn.addEventListener("click", (e) => {
  console.log("start button was clicked ");
  root.style.setProperty("--show", "flex");
  root.style.setProperty("--hide", "none");
  root.style.setProperty("--gridNone", "grid");
  playerScore = 0;
  computerScore = 0;
  roundsCount = 0;
  HumanScore.innerText = 0;
  MachineScore.innerText = 0;
  roundsCount = 0;
  finalResultDiv.remove();
  document.body.insertBefore(roundResult, containerDiv);
  roundResult.textContent = "Chose your weapon";
  mainDiv.style.display = "flex";
  console.log(`${playerScore} + ${computerScore}`);
  console.log(e);
});
resetButton.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  roundsCount = 0;
  HumanScore.innerText = playerScore;
  MachineScore.innerText = computerScore;
  finalResultDiv.remove();
  roundResult.textContent = "Chose your weapon";
  mainDiv.style.display = "flex";
});
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.stopPropagation();
    const computer = getComputerSelection();
    const player = getPlayerSelection(button.innerText.toLowerCase());
    PlayRound(computer, player);

    roundResult.textContent = result;
    roundResult.style.display = "flex";
    console.log(result);
  });
});

function endGame() {
  roundsCount = 0;
  HumanScore.innerText = playerScore;
  MachineScore.innerText = computerScore;

  root.style.setProperty("--show", "none");
  root.style.setProperty("--hide", "flex");

  let hideValue = root.style.getPropertyValue("--hide");

  roundResult.remove();
}

function getComputerSelection() {
  const computerSelection = ["Rock", "paper", "Scissors"];
  return computerSelection[
    Math.floor(Math.random() * computerSelection.length)
  ].toLowerCase();
}

function getPlayerSelection(playerSelection) {
  return playerSelection;
}

function PlayRound(computer, player) {
  if (player === "rock" || player === "paper" || player === "scissors") {
    if (computer === player) {
      result = `tie ... 
      computer selection :${computer}
      player selection : ${player} `;
    } else if (computer === "paper" && player === "rock") {
      computerScore++;
      result = `computer selection:${computer} 
                player : ${player}
                You loss ! ${computer} beats ${player} `;
    } else if (computer === "rock" && player === "scissors") {
      computerScore++;
      result = `computer selection:${computer} 
                player selection: ${player}
                You loss ! ${computer} beats ${player} `;
    } else if (computer === "scissors" && player === "paper") {
      computerScore++;
      result = `computer selection:${computer} 
      player selection: ${player} 
      You loss ! ${computer} beats ${player} `;
    } else if (computer === "paper" && player === "scissors") {
      playerScore++;
      result = `computer selection:${computer} 
      player selection: ${player}
      You win ! ${player} beats ${computer} `;
    } else if (computer === "rock" && player === "paper") {
      playerScore++;
      result = `computer selection:${computer} 
      player selection: ${player}
      You win ! ${player} beats ${computer} `;
    } else if (computer === "scissors" && player === "rock") {
      playerScore++;
      result = `computer selection:${computer} 
      player selection: ${player}
      You win ! ${player} beats ${computer} `;
    }
  }
  if (result === "") return;

  console.log(result);

  roundsCount++;
  if (roundsCount > 4) {
    getScore(computerScore, playerScore);

    newSpan.innerText = finalResult;
    document.body.prepend(finalResultDiv);
    finalResultDiv.append(newSpan);
    console.log(`count after : ${roundsCount}`);
    mainDiv.style.display = "none";
  }
  console.log(`count :${roundsCount}`);
  HumanScore.innerText = playerScore;
  MachineScore.innerText = computerScore;

  return result;
}

let finalResult = "";
function getScore(computerScore, playerScore) {
  if (playerScore > computerScore) {
    finalResult = `you are victories......`;
  } else {
    finalResult = ` you lost the war with machines `;
  }
  console.log(finalResult);
  return finalResult;
}
