let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
const pPlayerScore = document.querySelector("#player-score");
const pComputerScore = document.querySelector("#computer-score");
const pResult = document.querySelector("#result");
const resultTitle = document.querySelector("h3");

function getComputerChoice() {
  let randomNumber = Math.random() * 6 + 1;
  if (randomNumber <= 2) {
    return "rock";
  } else if (randomNumber > 4) {
    return "paper";
  } else {
    return "scissors";
  }
}
function disableButtons() {
  buttons.forEach((elem) => {
    elem.disabled = true;
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let playerChoice = e.target.id;
    let computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
  });
});
//  console.log(e.target.id))
// })

function game() {
  for (let i = 1; i < 6; i++) {
    playRound(playerChoice, computerChoice);
  }
  if (playerScore > computerScore) {
    console.log("You won the game!");
  } else if (computerScore > playerScore) {
    console.log("You lose the game.");
  } else {
    console.log("It's a tie");
  }
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    computerScore++;
    playerScore++;
    pResult.textContent = "It's a tie.";
    pPlayerScore.textContent = `Player score: ${playerScore}`;
    pComputerScore.textContent = `Computer score: ${computerScore}`;
    if (computerScore === 3 && playerScore === 3) {
        pResult.textContent = "It's a tie"
        disableButtons();
    }
  } else if (
    (playerChoice === "scissors" && computerChoice === "rock") ||
    (playerChoice === "paper" && computerChoice === "scissors") ||
    (playerChoice === "rock" && computerChoice === "paper")
  ) {
    computerScore++;
    pResult.textContent = "You lose.";
    pPlayerScore.textContent = `Player score: ${playerScore}`;
    pComputerScore.textContent = `Computer score: ${computerScore}`;
    if (computerScore === 3) {
        pResult.textContent = "You lost the game"
        disableButtons();
  } else {
    playerScore++;
    pResult.textContent = "You win!";
    pPlayerScore.textContent = `Player score: ${playerScore}`;
    pComputerScore.textContent = `Computer score: ${computerScore}`;
    if (playerScore === 3) {
        pResult.textContent = "You won the game"
        disableButtons();
    }
  }
}

// function playRound(playerChoice, computerChoice) {

//     playerChoice = playerChoice.toLowerCase()
//     if (playerChoice === computerChoice) {
//         console.log(`It's a tie --- Current score: ${playerScore} - ${computerScore}`)
//     } else if (playerChoice === "scissors" && computerChoice === "rock" || playerChoice === "paper" && computerChoice === "scissors" || playerChoice === "rock" && computerChoice === "paper") {
//         computerScore++
//         console.log(`You lose --- Current score: ${playerScore} - ${computerScore}`)
//     } else if (playerChoice === "scissors" && computerChoice === "paper" || playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "paper" && computerChoice === "rock") {
//         playerScore++
//         console.log(`You win --- Current score: ${playerScore} - ${computerScore}`)
//     } else {
//         return console.log("Invalid answer")
//     }

// function game() {
//     for (let i = 1; i < 6; i++) {
//         playRound(prompt("Your Choice"), getComputerChoice())
//     }
//     if (playerScore > computerScore) {
//         console.log("You won the game!")
//     } else if (computerScore > playerScore) {
//         console.log("You lose the game.")
//     } else {
//         console.log("It's a tie")
//     }

// }

// function game() {
//         for (let i = 1; i < 6; i++) {
//             playRound(playerChoice, computerChoice)
//         }
//         if (playerScore > computerScore) {
//             console.log("You won the game!")
//         } else if (computerScore > playerScore) {
//             console.log("You lose the game.")
//         } else {
//             console.log("It's a tie")
//         }

//     }

// game();
