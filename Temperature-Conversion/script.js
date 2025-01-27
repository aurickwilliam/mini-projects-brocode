const userInput = document.getElementById("user-input");
const tempType = document.getElementById("from-type");
const convertBtn = document.getElementById("convert");
const resultLabel = document.getElementById("result-label");


const tempConvert = () => {

    if (userInput.value === ""){
        window.alert("ENTER A VALUE!");
        return;
    }
    
    let input = Number(userInput.value);

    if (tempType.value === "Celsius"){
        resultLabel.textContent = `${celsiusToFahrenheit(input)} °F`;
    }
    else {
        resultLabel.textContent = `${fahrenheitToCelsius(input)} °C`;
    }

}

const celsiusToFahrenheit = (celsius) => {
    let fahrenheit = (celsius * (9/5)) + 32;
    return Math.floor(fahrenheit * 100) / 100;
}

const fahrenheitToCelsius = (fahrenheit) => {
    let celsius = (fahrenheit - 32) * (5/9);
    return Math.floor(celsius * 100) / 100;
}