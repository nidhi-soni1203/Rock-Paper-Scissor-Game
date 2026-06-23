let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");



const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissor'];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}


const drawGame = () => {
    msg.innerHTML = "Game is Draw! Play Again";
    msg.style.backgroundColor = "#081b31";
}


const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerHTML = userScore;
        msg.innerHTML = `You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerHTML = compScore;
        msg.innerHTML = `You Lost!  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

}

const playGame = (userChoice) => {
    //generate computer choices
    const compChoice = genCompChoice();

    if(userChoice === compChoice) {
        //draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === 'rock') {
            //paper or scissors
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper") {
            //rock or scissors
            userWin =compChoice === "rock" ? true : false;
        }
        else {
            //rock or paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
    
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);

    })
});