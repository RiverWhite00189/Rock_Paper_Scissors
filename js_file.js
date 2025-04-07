console.log("Hello World");

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
    let isWin = false;
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (humanChoice == computerChoice) {
        console.log("You tie! You both chose " + humanChoice);
        computerScore--;
    } else if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            console.log("You lose. Paper beats Rock.");
        } else {
            console.log("You win! Rock beats Scissor");
            isWin = true;
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "scissor") {
            console.log("You lose. Scissor beats Paper.");
        } else {
            console.log("You win! Paper beats Rock");
            isWin = true;
        }
    } else if (humanChoice == "scissor") {
        if (computerChoice == "rock") {
            console.log("You lose. Rock beats Scissor.")
        } else {
            console.log("You win! Scissor beats Paper")
            isWin = true;
        }
    }

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

playGame();