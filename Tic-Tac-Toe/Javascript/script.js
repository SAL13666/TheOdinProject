
const game = (() => {
    const startButton = document.querySelector(".game button#Start");
    const game = document.querySelector(".game");
    const gameOption = document.createElement("div");
    
    startButton.addEventListener("click", () => {
        game.style.cssText = "top: 20%;";
        startButton.style.cssText = "display: none;";
        gameOption.classList.add("game-option");
        gameOption.appendChild(makeButton("Ai","play vs Ai"));
        gameOption.appendChild(makeButton("player","play vs player"));
        game.appendChild(gameOption);
        playVsAiMenu();        
    })
    const makeButton = (buttonName, buttonText) => {
        let button = document.createElement("button");
        button.innerText = buttonText;
        button.id = buttonName;
        return button;
    }

    const playVsAiMenu = () => {
        const menu = document.createElement("div");
        menu.id = "Ai-menu";
        menu.innerHTML = `
        <ul>
            <li class="one">Level one</li>
            <li class="two">Level two</li>
            <li class="three">Level three</li>
        </ul>`
        document.querySelector(".game .game-option button#Ai").addEventListener("click", () => {
            game.appendChild(menu);
            playerVsAiMode();
        })
    };

    //bug
    const playerVsAiMode = () => {
        document.querySelectorAll("#Ai-menu ul li").forEach(function(li){
            li.addEventListener("click", () => {
                if(li.className === "one") {
                    document.querySelector("#Ai-menu").style.cssText = "display: none;"
                    gameBoard();
                }
            })
        }) 
    };

    const gameBoard = () => {
        let gameBoard = document.createElement("div");
        gameBoard.classList.add("game-board");
        for(let i = 1; i <= 9; i++) {
            let boardSquare = document.createElement("div");
            boardSquare.classList.add(`board-squere${i}`);
            gameBoard.appendChild(boardSquare);
        }
        document.body.appendChild(gameBoard);
    }

})();
