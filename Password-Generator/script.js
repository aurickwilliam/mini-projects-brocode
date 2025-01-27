const passLength = document.getElementById("length");
const lowercaseCheckbox = document.getElementById("isLowercase");
const uppercaseCheckbox = document.getElementById("isUppercase");
const numberCheckbox = document.getElementById("isNumber");
const symbolCheckbox = document.getElementById("isSymbol");
const resultLabel = document.getElementById("result-label");

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = lowercaseLetters.toUpperCase();
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_+=[]{}:;'\",.<>/?";

const generatePassword = () => {
    let characters = "";
    let password = "";

    characters += lowercaseCheckbox.checked ? lowercaseLetters : "";
    characters += uppercaseCheckbox.checked ? uppercaseLetters : "";
    characters += numberCheckbox.checked ? numbers : "";
    characters += symbolCheckbox.checked ? symbols : "";
    
    if (characters === ""){
        window.alert("Please check atleast 1 of the options below");
        return;
    }

    for (let i = 0; i < passLength.value; i++){
        let index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }
    
    resultLabel.value = password;
}

const copyPassword = () => {
    navigator.clipboard.writeText(resultLabel.value);
}