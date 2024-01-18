
const scoreDiv=document.createElement("div");
const matchResult=document.createElement("h2");
const header=document.createElement("h3");
const header2=document.createElement("h3");
scoreDiv.appendChild(matchResult);
scoreDiv.appendChild(header);
scoreDiv.appendChild(header2);

document.querySelector("#score").appendChild(scoreDiv);


function getRandomChoice(){
    const choices=["rock","paper","scissors"];
    let choice=Math.floor(Math.random()*3); /// generate a random number between 0 and 2
    return choices[choice];
}

let playRound= (playerSelection,computerSelection) => {
    playerSelection=playerSelection.toLowerCase();
    console.log("Computer chooses: "+computerSelection)
    if(playerSelection==computerSelection){
        matchResult.textContent="The match is a tie";
        return 0;
    }
    else if(playerSelection=="rock" && computerSelection == "scissors" || playerSelection=="paper" && computerSelection == "rock" || playerSelection=="scissors" && computerSelection == "paper" ){
        matchResult.textContent=(`You win! ${playerSelection} beats ${computerSelection} `);
        return 1;
    }
    else if(computerSelection=="rock" && playerSelection == "scissors" || computerSelection=="paper" && playerSelection == "rock" || computerSelection=="scissors" && playerSelection == "paper" ){
        matchResult.textContent=(`You lose! ${playerSelection} loses to ${computerSelection} `);
        return -1;
    }
}

// console.log(playRound(prompt("rock paper scissors?"),getRandomChoice()))/
let playerScore = 0;
let compScore = 0;
let game = () => {


    header.textContent="Your win count:" +playerScore ;
    header2.textContent="computers win count:" +compScore ;

    const rockBtn = document.querySelector("#btn1")
    const paperBtn = document.querySelector("#btn2")
    const scissorBtn = document.querySelector("#btn3")


    rockBtn.addEventListener('click', () => {
        let score = playRound("rock", getRandomChoice());
        if (score > 0) {
            playerScore++;
        } else if (score < 0) {
            compScore++;
        }
        header.textContent="Your win count:" +playerScore ;
        header2.textContent="computers win count:" +compScore ;
        didPlayerWin(playerScore,compScore);
        didCompWin(playerScore,compScore);
    });
    paperBtn.addEventListener('click', () => {

        let score = playRound("paper", getRandomChoice());
        if (score > 0) {
            playerScore++;
        } else if (score < 0) {
            compScore++;
        }
        header.textContent="Your win count:" +playerScore ;
        header2.textContent="computers win count:" +compScore ;
        didPlayerWin(playerScore,compScore);
        didCompWin(playerScore,compScore);
    });
    scissorBtn.addEventListener('click', () => {

        let score = playRound("scissors", getRandomChoice());
        if (score > 0) {
            playerScore++;
        } else if (score < 0) {
            compScore++;
        }
        header.textContent="Your win count:" +playerScore ;
        header2.textContent="computers win count:" +compScore ;
        didPlayerWin(playerScore,compScore);
        didCompWin(playerScore,compScore);
    });



}

const didPlayerWin= (playerScore,compScore) => {
    if(playerScore>=5 && compScore<5){
        console.log("win");
        matchResult.textContent="Player wins!!";
    }
};
const didCompWin = (playerScore,compScore) => {
    if(playerScore<5 && compScore>5) {
        matchResult.textContent = "Computer wins!!";
        console.log("lose");
    }
};

game();