function getComputerChoice() {
    let num = Math.floor(1 + Math.random() * 3); //give 1 2 or 3
    let choice;
    switch(num) {
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissor";
            break;
    }
    return choice;
}

function getHumanChoice() {
    return prompt("What will you do? Rock, Paper, or Scissor... ");
}
//console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    const result = document.createElement("div")
    let isWin = false;

    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (humanChoice == computerChoice) {
        result.textContent = "You tie! You both chose " + humanChoice;
        computerScore--;
    } else if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            result.textContent = "You lose. Paper beats Rock.";
        } else {
            result.textContent = "You win! Rock beats Scissor";
            isWin = true;
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "scissor") {
            result.textContent = "You lose. Scissor beats Paper.";
        } else {
            result.textContent = "You win! Paper beats Rock";
            isWin = true;
        }
    } else if (humanChoice == "scissor") {
        if (computerChoice == "rock") {
            result.textContent = "You lose. Rock beats Scissor."
        } else {
            result.textContent = "You win! Scissor beats Paper"
            isWin = true;
        }
    }

    const results = document.querySelector("#results");
    results.appendChild(result)
    
    if (isWin) {
        humanScore++;
    } else {
        computerScore++;
    }


}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(),getComputerChoice());
    }
    
    if (humanScore > computerScore) {
        console.log("You Win!!")
    } else if (humanScore < computerScore) {
        console.log("You Lose...");
    } else {
        console.log("Woah! A Tie!");
    }
}

//playGame();

let buttons = document.querySelector("#buttons");
buttons.addEventListener("click", (e) => {
    let choice = e.target.id
    playRound(choice, getComputerChoice())

});
