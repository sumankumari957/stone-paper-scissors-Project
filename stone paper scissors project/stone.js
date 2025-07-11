let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game was Draw. play again/.";
};

const showWinner = (userWin) => {
    if(userWin){
        console.log("you win!");
        msg.innerText = "you win!";
    }else{
        console.log("you lose");
        msg.innerText = "you .lose.";
    }
}

const playGame = (userChoice) => {
    console.log("user-choice = ", userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp-choice = ", compChoice);

    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true
        }else{
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
// console.log("choice was clicked", userChoice);


  });
})