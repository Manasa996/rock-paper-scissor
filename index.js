const choices = document.querySelectorAll(".option");
const message = document.querySelector(".msg");
const usercount = document.querySelector("#userScore");
const compcount = document.querySelector("#compScore");
let usercounter = 0;
let compcounter = 0;

//assigning click to each image and start game on click
choices.forEach((option) => {
    option.addEventListener("click", () => {
        const userchoice = option.getAttribute("id")
        playGame(userchoice);
    })
})

//to get computer's random choice
const gencompchoice = () => {
    const option = ["rock", "paper", "scissor"];
    const temp = Math.floor(Math.random() * 3);
    return option[temp];
}

//validation
const playGame = (userchoice) => {
    const compchoice = gencompchoice();
    if (userchoice === compchoice) {
        drawgame()
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissor" ? false : true
        } else {
            userwin = compchoice === "rock" ? false : true
        }
        showresult(userwin, compchoice, userchoice);
    }
}

//display for draw scene
const drawgame = () => {
    message.innerText = "Game is Draw. Play Again";
    message.style.backgroundColor = "#3063ab"
}

//showresult display and color change
const showresult = (userwin, compchoice, userchoice) => {
    if (userwin) {
        message.innerText = `You win! You choose ${userchoice} beats computer's choice ${compchoice}`;
        message.style.backgroundColor = "green"
        usercounter++;
        usercount.innerText = usercounter
    } else {
        message.innerText = `You lose. Computer's choice was ${compchoice} beats your ${userchoice}`;
        message.style.backgroundColor = "red"
        compcounter++;
        compcount.innerText = compcounter
    }
}