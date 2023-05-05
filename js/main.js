let playerScore = 0;
let computerScore = 0;


function getComputerChoice () {
   let randomNumber = (Math.random() * 6) +1;
   if (randomNumber <= 2) {
    return "rock"
   } else if (randomNumber > 4){
    return "paper"
   } else {
    return "scissors"
   }
}
function playRound (playerChoice, computerChoice) {

playerChoice = playerChoice.toLowerCase()
if (playerChoice === computerChoice) {
 console.log(`It's a tie --- Current score: ${playerScore} - ${computerScore}`)
} else if (playerChoice === "scissors" && computerChoice === "rock" || playerChoice === "paper" && computerChoice === "scissors" || playerChoice === "rock" && computerChoice === "paper") {
    computerScore++
    console.log(`You lose --- Current score: ${playerScore} - ${computerScore}`)
}else if (playerChoice === "scissors" && computerChoice === "paper" || playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "paper" && computerChoice === "rock") {
    playerScore++
console.log(`You win --- Current score: ${playerScore} - ${computerScore}`)
} else {
    return console.log("Invalid answer")
}
}

function game () {
for (let i = 1; i < 6; i++){
playRound(prompt("Your Choice"), getComputerChoice())
 }
 if (playerScore > computerScore){
    console.log("You won the game!")
    }else if (computerScore > playerScore){
        console.log("You lose the game.")
    }else{ 
        console.log("It's a tie")
}
  
}

game();



