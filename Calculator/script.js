const display = document.getElementById("display");

const appendToDisplay = (value) => {
    if (display.value === "0") {
        display.value = "";
    }
    display.value += value;
}

const clearDisplay = () => {
    display.value = "0";
}

const popDisplay = () => {
    if (display.value.length == 1){
        display.value = "0";
    }

    if (display.value !== "0"){
        let characters = display.value.split("");        
        characters.pop();        
        display.value = characters.join("");        
    }
}

const evaluateDisplay = () => {
    try{
        display.value = eval(display.value);
    }
    catch(err){
        display.value = "Syntax Error";
    }
}