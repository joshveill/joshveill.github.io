// Initiation of the game, total of 5 games
function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    // New selection for the player and computer for every loop done
    const computerSelection = computerPlay();
    //Player is prompted to enter a value for every game (loop done)
    const playerSelection = window.prompt("Enter your choice").toLowerCase();
    // Score tracking and logging of who won which match invidually
    let game = playRound(playerSelection, computerSelection);
    if (game.includes("You win")) {
      playerScore += 1;
      console.log("Player's point");
    } else if (game.includes("lose")) {
      computerScore += 1;
      console.log("Computer's point");
    } else {
      console.log("tie");
    }
  }

  console.log(`Player has ${playerScore}, computer has ${computerScore}`);
}
// This function is called in the "game" function to inititate a random choice of rock, paper, scissors everytime
function computerPlay() {
  let num = Math.floor(Math.random() * 3);

  switch (num) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
}
//This funtion compares the input of the player and computer to decide either a winner or a tie
function playRound(pS, cS) {
  // ROCK for player
  if (pS == "rock" && cS == "paper") {
    return "You lose! Paper beats rock";
  } else if (pS == "rock" && cS == "scissors") {
    return "You win! Rock beats scissors";
  } else if (pS == "rock" && cS == "rock") {
    return "No winner! rock vs rock";
  }
  // PAPER for player
  else if (pS == "paper" && cS == "paper") {
    return "No winner! paper vs paper";
  } else if (pS == "paper" && cS == "scissors") {
    return "You lose! Scissors beats paper";
  } else if (pS == "paper" && cS == "rock") {
    return "You win! paper beats rock";
  }
  // SCISSORS for player
  else if (pS == "scissors" && cS == "paper") {
    return "You win! Scissors beats paper";
  } else if (pS == "scissors" && cS == "scissors") {
    return "No winner! scissors vs scissors";
  } else if (pS == "scissors" && cS == "rock") {
    return "You lose! Rock beats scissors";
  }
}
