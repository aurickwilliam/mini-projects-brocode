
const updateClock = () => {
    const clock = document.getElementById("clock");

    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const min = date.getMinutes().toString().padStart(2, "0");

    const time = `${hours}:${min}`;

    clock.textContent = time;
}

setInterval(updateClock, 1000);