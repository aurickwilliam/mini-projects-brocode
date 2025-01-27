const userInput = document.getElementById("user-number");
const submitBtn = document.getElementById("submit");
const result = document.getElementById("result-message");

const MAX_VAL = 100;
const MIN_VAL = 1;
let randomNum = Math.floor(Math.random() * (MAX_VAL - MIN_VAL) + 1) + MIN_VAL;
let no_tries = 0;

submitBtn.onclick = () => {
    console.log(randomNum);
    no_tries++;
    let number = Number(userInput.value);

    if (number === 0){
        window.alert("ENTER A NUMBER!");
        return;
    }
    else if (number > 100 || number < 1){
        window.alert("ENTER A NUMBER FROM 1 - 100 ONLY!");
        return;
    }

    if (number === randomNum){
        result.textContent = "";
        alert(`CONGRATULATIONS! YOU HAVE GUESS THE NUMBER!
            \nTHE NUMBER IS ${randomNum}\nNO. OF ATTEMPTS: ${no_tries}`);
        window.location.reload();
    }
    else if (number > randomNum){
        result.textContent = "LOWER!";
    }
    else if (number < randomNum){
        result.textContent = "HIGHER!";
    }
}