//Write a function that randomly returns "rock", "paper", or "scissors"
//Declare a function for computer's choice
function getComputerChoice(){
        //Declare a function to generate random number
        function getComputerRandom(min, max){
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
        }
        //Store results of function in variable
        let computerChoice = getComputerRandom(1, 3);
        //Select choice based on data stored in variable
        if (computerChoice <= 1){
            return ("rock");
        } else if (computerChoice <=2){
            return ("paper");
        } else{
            return ("scissors");
        }
    
}
//Declare function for player's choice
function getHumanChoice(){
//Prompt user for option and store answer in variable
    let promptChoice = prompt("What weapon do you choose? Enter rock, paper, or scissors", "");
    let humanChoice = promptChoice.toLowerCase();
  //Select choice based on stored data in variable  
   if (humanChoice == "rock"){
    return ("rock");
   }else if (humanChoice == "paper"){ 
    return ("paper");
   }else if (humanChoice == "scissors"){
    return ("scissors");
   }else{
    return ("invalid option");
   }
   }

function playGame(roundResult){
    let humanScore = 0;
    let computerScore = 0;
    roundResult = playRound();
//Create function for game round
    function playRound(humanChoice, computerChoice){
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
    
        if (humanChoice == "rock" && computerChoice == "scissors"){ 
            console.log("You win! Rock beats Scissors.");
            humanScore = (humanScore + 1);
        } else if (humanChoice == "rock" && computerChoice == "paper"){
            console.log("You lose! Paper beats Rock.");
            computerScore = (computerScore + 1);
        } else if (humanChoice == "paper" && computerChoice == "rock"){
            console.log("You win! Paper beats Rock.");
            humanScore = (humanScore + 1);
        } else if (humanChoice == "paper" && computerChoice == "scissors"){
            console.log("You lose! Scissors beats Paper.");
            computerScore = (computerScore + 1);
        } else if (humanChoice == "scissors" && computerChoice == "paper"){
            console.log("You win! Scissors beats Paper.");
            humanScore = (humanScore + 1);
        } else if (humanChoice == "scissors" && computerChoice == "rock"){
            console.log("You lose! Rock beats Scissors.");
            computerScore = (computerScore + 1);
        } else if (humanChoice == computerChoice){
            console.log("You tied! Try Again.")
        } else{
            console.log("Invalid option. Try Again");  
        }
        console.log("Score: Player - " + humanScore + " | " + "Computer - " + computerScore);
    }
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    
} 



// Rock beats Scissors
// Paper beats Rock
// Scissors beats Paper