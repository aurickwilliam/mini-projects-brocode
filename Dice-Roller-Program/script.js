
const noDice = document.getElementById("no-dice");
const resultContainer = document.getElementById("result-container");
const resultImgContainer = document.getElementById("result-img-container");

const roll = () => {
    const values = [];
    const listImages = [];

    for (let i = 0; i < noDice.value; i++){
        let diceRoll = Math.floor(Math.random() * 6) + 1;
        values.push(diceRoll);
        listImages.push(`<img src="diceImages/${diceRoll}.png" alt="Dice ${diceRoll}">`);
    }
    console.log(values);
    
    resultContainer.textContent = "Dice: " + values.join(", ");
    resultImgContainer.innerHTML = listImages.join("");
}