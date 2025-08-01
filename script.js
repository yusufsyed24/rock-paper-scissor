const computer = document.querySelector(".computer img");
const player = document.querySelector(".player img");
const computerPoints = document.querySelector(".computerPoints");
const playerPoints = document.querySelector(".playerPoints");
const options = document.querySelectorAll(".options button");
const message = document.querySelector(".message");

// Initialize with default images
computer.src = "./assets/img/stoneComputer.png";
player.src = "./assets/img/stonePlayer.png";

options.forEach((option) => {
  option.addEventListener("click", () => {
    // Disable buttons during animation
    options.forEach(btn => btn.disabled = true);
    
    computer.classList.add("shakeComputer");
    player.classList.add("shakePlayer");
    message.textContent = "CHOOSING...";

    setTimeout(() => {
      computer.classList.remove("shakeComputer");
      player.classList.remove("shakePlayer");

      const playerChoice = option.innerHTML.toUpperCase();
      player.src = `./assets/img/${playerChoice.toLowerCase()}Player.png`;

      const choices = ["STONE", "PAPER", "SCISSORS"];
      const computerChoice = choices[Math.floor(Math.random() * 3)];
      computer.src = `./assets/img/${computerChoice.toLowerCase()}Computer.png`;

      updateScore(playerChoice, computerChoice);
      updateMessage(playerChoice, computerChoice);
      
      // Re-enable buttons
      options.forEach(btn => btn.disabled = false);
    }, 900);
  });
});

function updateScore(playerChoice, computerChoice) {
  let cPoints = parseInt(computerPoints.innerHTML);
  let pPoints = parseInt(playerPoints.innerHTML);

  if (playerChoice === computerChoice) {
    return; // It's a tie
  }

  if (
    (playerChoice === "STONE" && computerChoice === "SCISSORS") ||
    (playerChoice === "PAPER" && computerChoice === "STONE") ||
    (playerChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    playerPoints.innerHTML = pPoints + 1;
  } else {
    computerPoints.innerHTML = cPoints + 1;
  }
}

function updateMessage(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    message.textContent = "IT'S A TIE!";
    return;
  }

  if (
    (playerChoice === "STONE" && computerChoice === "SCISSORS") ||
    (playerChoice === "PAPER" && computerChoice === "STONE") ||
    (playerChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    message.textContent = "YOU WIN THIS ROUND!";
  } else {
    message.textContent = "COMPUTER WINS THIS ROUND!";
  }
}