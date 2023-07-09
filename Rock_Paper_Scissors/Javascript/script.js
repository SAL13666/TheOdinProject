let Options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
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

let computerScore = 0;
let playerScore = 0;
let butns = document.querySelectorAll("img");
function game() {
    let playerSelection;
    butns.forEach(function(butn) {
        butn.addEventListener("click", function (e) {
            playerSelection = Options[e.target.id];
            let computerSelection = getComputerChoice();
            document.querySelector(".player-score h3").innerHTML = e.target.outerHTML;
            document.querySelector(".computer-score h3").innerHTML = document.getElementById(computerSelection).outerHTML;
            if(playRound(playerSelection,Options[computerSelection]) === 1)
            {
                playerScore++;
                document.querySelector(".player-score p").textContent = `Player:  ${playerScore}`;
            } else if (playRound(playerSelection,Options[computerSelection]) === 0)
            {
                computerScore++;
                document.querySelector(".computer-score p").textContent = `Computer: ${computerScore}`;
            }
            if (computerScore >= 5 || playerScore >= 5)
            {
                if(computerScore > playerScore)
                {
                    document.querySelector(".result .result-content h2").textContent = "You Lose";
                }
                else {
                    document.querySelector(".result .result-content h2").textContent = "You Won";
                }
                document.getElementsByClassName("result")[0].style = "display:flex;";
                document.querySelector(".result .result-content button").addEventListener("click", function () {
                    playerScore = 0;
                    computerScore = 0;
                    document.querySelector(".player-score p").textContent = `Player:  ${playerScore}`;
                    document.querySelector(".computer-score p").textContent = `Computer: ${computerScore}`;
                    document.getElementsByClassName("result")[0].style = "display:none;";
                }) 
            }
        })
    });

}




game();