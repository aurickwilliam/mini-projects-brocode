const resultDisplay = document.getElementById("result");

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const againBtn = document.getElementById("againBtn");

const userPick = document.getElementById("user-pick");
const compPick = document.getElementById("computer-pick");

const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");

const hands = document.querySelectorAll("#controls button");

const listOfHands = ["rock", "paper", "scissors"];

rockBtn.addEventListener("click", event => {
    event.currentTarget.classList.add("active");
    toggleDisableBtn(hands, true);
    gameStart(listOfHands[0]);
});

paperBtn.addEventListener("click", event => {
    event.currentTarget.classList.add("active");
    toggleDisableBtn(hands, true);
    gameStart(listOfHands[1]);
});

scissorsBtn.addEventListener("click", event => {
    event.currentTarget.classList.add("active");
    toggleDisableBtn(hands, true);
    gameStart(listOfHands[2]);
});  

againBtn.addEventListener("click", event => {
    toggleDisableBtn(hands, false);
    resetBtn();
    
    resultDisplay.textContent = "";
    resultDisplay.style.display = "none";
    
    compPick.className = "";
    compPick.classList.add("fa-solid");
    compPick.classList.add("fa-flip-horizontal");
    
    userPick.className = "";
    userPick.classList.add("fa-solid");

    againBtn.style.display = "none";
})

let _userScore = 0;
let _compScore = 0;

const gameStart = (user) => {
    let handIndex = Math.floor(Math.random() * 3);
    let computer = listOfHands[handIndex];
    let result = "";
    let winMessage = "You Win!";
    let loseMessage = "You Lose!";

    if (user === computer) {
        result = "Tied!";
    }
    else {
        switch (user){
            case listOfHands[0]:
                if (computer === listOfHands[2]){
                    result = winMessage;
                    _userScore++;
                }else{
                    result = loseMessage;
                    _compScore++;
                }
                break;
            case listOfHands[1]:
                if (computer === listOfHands[0]){
                    result = winMessage;
                    _userScore++;
                }else{
                    result = loseMessage;
                    _compScore++;
                }
                break;
            case listOfHands[2]:
                if (computer === listOfHands[1]){
                    result = winMessage;
                    _userScore++;
                }else{
                    result = loseMessage;
                    _compScore++;
                }
                break;
            default:
                result = "Error!";
        }
    }

    switch(listOfHands[handIndex]){
        case listOfHands[0]:
            compPick.classList.add("fa-hand-back-fist");
            break;
        case listOfHands[1]:
            compPick.classList.add("fa-hand");
            break;
        case listOfHands[2]:
            compPick.classList.add("fa-hand-scissors");
            break;
    }

    switch(user){
        case listOfHands[0]:
            userPick.classList.add("fa-hand-back-fist");
            break;
        case listOfHands[1]:
            userPick.classList.add("fa-hand");
            break;
        case listOfHands[2]:
            userPick.classList.add("fa-hand-scissors");
            break;
    }

    resultDisplay.textContent = result;
    resultDisplay.style.display = "block";
    againBtn.style.display = "block";

    userPick.style.display = "block";
    compPick.style.display = "block";

    userScore.textContent = _userScore.toString().padStart(2, "0");
    computerScore.textContent = _compScore.toString().padStart(2, "0");
}

const resetBtn = () => {
    hands.forEach(hand => {
        hand.classList.add("hover");
        hand.classList.remove("active");
    })
}

const toggleDisableBtn = (listOfElements, isDisabled) => {
    listOfElements.forEach(element => {
        element.disabled = isDisabled;
        element.classList.remove("hover");
    })

}
