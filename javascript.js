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
    choice = prompt("What weapon do you choose? Enter 1, 2, or 3", "");
    
    if (choice = 1){
        return ("rock");
    }else if (choice = 2){
        return ("paper");
    }else{
        return ("scissors");
    }

}


