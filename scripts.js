let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let userScoreDisplay = document.getElementById("user");
let compScoreDisplay = document.getElementById("computer");
let message = document.getElementById("message");

const drawGame = () => {
    message.textContent = "It's a draw!";
    message.style.color = "blue";
};

const showWinner = (userWin) => {
    if (userWin) {
        message.textContent = "You win!";
        message.style.color = "green";
        userScore++;
        userScoreDisplay.textContent = userScore;
    } else {
        message.textContent = "You lose!";
        message.style.color = "red";
        compScore++;
        compScoreDisplay.textContent = compScore;
    }
};

const genComputerChoice = () => {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
};

const playGame = (userChoice) => {
    console.log("User choice =", userChoice);
    const compChoice = genComputerChoice();
    console.log("Comp choice =", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin =
            (userChoice === "rock" && compChoice === "scissors") ||
            (userChoice === "paper" && compChoice === "rock") ||
            (userChoice === "scissors" && compChoice === "paper");

        showWinner(userWin);
    }
};

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        playGame(choice.id);
    });
});
