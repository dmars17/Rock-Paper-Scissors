
let playerScore = 0;
let computerScore = 0;

function getRandomNumber(){
    let randomNubmer = 0;
    randomNubmer = Math.floor((Math.random()*3)+1);
    return randomNubmer;
}

function computerPlay(){
    let computerSelection = getRandomNumber();
    if (computerSelection === 1){
        return "rock"
    }
    if (computerSelection === 2){
        return "paper"
    }

    if (computerSelection === 3){
        return "scissors"
    }

}


function oneRound(){
    let playerChoice = prompt("Enter either rock, paper or scissors.");
    let computerChoice = computerPlay();
    let result;

    console.log(`You picked: ${playerChoice}`);
    console.log(`Computer picked: ${computerChoice}`);
    
    if ((playerChoice == 'rock' && computerChoice == 'scissors') || (playerChoice == 'scissors' && computerChoice == 'paper') ||(playerChoice == 'paper' && computerChoice == 'rock')) {
        result = "You win this round";
        console.log(result);
        playerScore +=1;
    }
    else if (playerChoice.toLowerCase() == computerChoice){
        result = "Tie game."
        console.log(result)
    }
    else {
        result = "Computer wins this round.";
        console.log(result)
        computerScore +=1;
    }
}

function bestOfFive(){
    let result;
    while (playerScore != 5 || computerScore != 5){
        oneRound();
        if (playerScore == 5){
            result = "You win the game";
            console.log(result);
        }
        if (computerScore == 5){
            result = "The Computer wins the game";
            console.log(result);
        }
    }
}

bestOfFive();




















// let playerSelection = parseInt(prompt("Please select rock, paper, or scissor!").toLowerCase());

// let computerSelection = computerPlay();

// function oneRound(playerSelection, computerSelection){
//     if (playerSelection == 'rock' && computerSelection == 'paper'){
//         return "Computer wins!"
//     }
//     else if (playerSelection == 'paper' && computerSelection == 'scissor'){
//         return "Computer wins!"
//     }
//     else if (playerSelection == 'scissor' && computerSelection == 'rock'){
//         return "Computer wins!"
//     }
//     else if (playerSelection == 'rock' && computerSelection == 'scissor'){
//         return "Player wins!"
//     }
//     else if (playerSelection == 'paper' && computerSelection == 'rock'){
//         return "Player wins!"
//     }
//     else if (playerSelection == 'scissor' && computerSelection == 'paper'){
//         return "Player wins!"
//     }
//     else {
//         return 'No Winner!'
//     }
// }
// console.log(computerSelection)
// console.log(oneRound(playerSelection, computerSelection))