const timeDisplay = document.getElementById("time-display");
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");
const stopBtn = document.getElementById("stop-btn");

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

startBtn.addEventListener("click", event => {
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        // every 10 ms
        timer = setInterval(update, 10);
        isRunning = true;
    }   

});

stopBtn.addEventListener("click", event => {
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
});

resetBtn.addEventListener("click", event => {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    timeDisplay.textContent = "00:00:00:00";
});

const update = () => {
    const currentTime = Date.now();
    // in MS
    elapsedTime = currentTime - startTime;

    // Convert the elapsedTime
    const MS = 1000;
    const S = 60;
    const M = 60;

    let hours = Math.floor(elapsedTime / (MS * S * M));
    let minutes = Math.floor(elapsedTime / (MS * S) % 60);
    let seconds = Math.floor(elapsedTime / (MS) % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");
    milliseconds = milliseconds.toString().padStart(2, "0");

    let time = `${hours}:${minutes}:${seconds}:${milliseconds}`;

    timeDisplay.textContent = time;
}