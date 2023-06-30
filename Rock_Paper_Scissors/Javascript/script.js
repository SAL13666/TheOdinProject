let Options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return Options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLocaleLowerCase();

    if(playerSelection === computerSelection) {
        console.log(`${playerSelection} and ${computerSelection} are the same so its a Tie`);
        return -1;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log(`You Lose ${computerSelection} beats ${playerSelection}`);
        return 0;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log(`You Win ${playerSelection} beats ${computerSelection}`);
        return 1;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log(`You Win ${playerSelection} beats ${computerSelection}`);
        return 1;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log(`You Lose ${computerSelection} beats ${playerSelection}`);
        return 0;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log(`You Win ${playerSelection} beats ${computerSelection}`);
        return 1;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log(`You Lose ${computerSelection} beats ${playerSelection}`);
        return 0;
    }

}

function game() {
    let computerScore = 0;
    let playerScore = 0;
    let playerSelection;
    let computerSelection;

    while(computerScore <= 5 || playerScore <= 5) {
        computerSelection = getComputerChoice();
        playerSelection = prompt("Enter Your choice");
        if(playRound(playerSelection, computerSelection) === 1)
        {
            playerScore++;
        } else if(playRound(playerSelection, computerSelection) === 0) {
            computerScore++;
        }
        if(playerScore === 5) {
            console.log("congrats you won the game");
            return;
        } else if (computerScore === 5) {
            console.log("you lost the game");
            return;
        }
    }
}

game();

