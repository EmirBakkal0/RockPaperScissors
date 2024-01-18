function getRandomChoice(){
    const choices=["rock","paper","scissors"];
    let choice=Math.floor(Math.random()*3); /// generate a random number between 0 and 2
    //console.log(choice);
    return choices[choice];
}

//console.log(getRandomChoice());


let playRound= (playerSelection,computerSelection) => {
    playerSelection=playerSelection.toLowerCase();
    console.log("Computer chooses: "+computerSelection)
    if(playerSelection==computerSelection){
        console.log("The match is a tie");
        return 0;
    }
    else if(playerSelection=="rock" && computerSelection == "scissors" || playerSelection=="paper" && computerSelection == "rock" || playerSelection=="scissors" && computerSelection == "paper" ){
        console.log(`You win! ${playerSelection} beats ${computerSelection} `);
        return 1;
    }
    else if(computerSelection=="rock" && playerSelection == "scissors" || computerSelection=="paper" && playerSelection == "rock" || computerSelection=="scissors" && playerSelection == "paper" ){
        console.log(`You lose! ${playerSelection} loses to ${computerSelection} `);
        return -1;
    }
}

// console.log(playRound(prompt("rock paper scissors?"),getRandomChoice()))/

let game = () => {
    let score= 0;
    for (let i=0; i<5;i++){
        score+=playRound(prompt("rock paper scissors?"),getRandomChoice());
    }
    if(score>0){
        console.log("Player wins the whole match ");
    }
    
    else {
        console.log("Computer wins the whole match");
    }
}
game();