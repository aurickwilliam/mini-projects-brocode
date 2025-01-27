const city = document.getElementById("search-box");
const searchBtn = document.getElementById("search-btn");
const errorDisplay = document.getElementById("error-message");

const cityDisplay = document.getElementById("city");
const tempDisplay = document.getElementById("temp");
const weatherImg = document.getElementById("weather-img");
const windDisplay = document.getElementById("wind");
const humidityDisplay = document.getElementById("humidity");
const minTempDisplay = document.getElementById("mintemp");
const descriptionDisplay = document.getElementById("description");

const previewCity = "San Francisco";
const previewData = async (city) => {
    const data = await getWeatherData(city);
    console.log(data);
    displayWeatherInfo(data);
}

const getWeatherData =  async (city) => {
    const api = "0df4fe6cf912d5785ebf8980388bd4a8";
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`);

    if (!response.ok){
        throw new Error("Could not Fetch Data!");
    }

    return await response.json();
}

document.addEventListener("DOMContentLoaded", previewData(previewCity));

searchBtn.addEventListener("click", async () => {
    errorDisplay.style.display = "none";

    if (city.value){
        try{
            const weatherData = await getWeatherData(city.value);
            console.log(weatherData);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            displayError(error);
        }
    }
    else {
        console.log("Error");
        displayError("Invalid City Name");
    }
})

const displayError = (message) => {
    errorDisplay.textContent = message;
    errorDisplay.style.display = "flex";
}

const displayWeatherInfo = (data) => {
    let {
        name: cityName,
        main: {temp, humidity, temp_min},
        wind: {speed},
        weather: [{description, id}]
    } = data;

    temp = (temp - 273.15).toFixed(1);
    speed = speed.toFixed(2);
    humidity = humidity.toFixed(1);
    minTemp = (temp_min - 273.15).toFixed(1);

    cityDisplay.textContent = cityName;
    tempDisplay.textContent = temp + " °C";
    windDisplay.textContent = speed + " m/s";
    humidityDisplay.textContent = humidity + "%";
    minTempDisplay.textContent = minTemp + " °C"; 
    descriptionDisplay.textContent = description;
    weatherImg.src = getWeatherImage(id);

    cityDisplay.className = "";

    if (id >= 300 && id < 600){
        cityDisplay.classList.add("rainy-city");
    }
    else if (id >= 800){
        cityDisplay.classList.add("sunny-city");
    }
    else if (id >= 200 && id < 300){
        cityDisplay.classList.add("thunder-city");
    }
    else if (id >= 600 && id < 700){
        cityDisplay.classList.add("snowy-city");
    }
}

const getWeatherImage = (weatherId) => {
    switch(true){
        case (weatherId >= 200 && weatherId < 300):
            return "./img/thunder-bolt.png";
        case (weatherId >= 300 && weatherId < 400):
            return "./img/drizzle.png";
        case (weatherId >= 500 && weatherId < 600):
            return "./img/heavy-rain.png";
        case (weatherId >= 600 && weatherId < 700):
            return "./img/snow.png";
        case (weatherId >= 700 && weatherId < 800):
            return "./img/mist.png";
        case (weatherId == 800):
            return "./img/sun.png";
        case (weatherId > 800):
            return "./img/cloudy.png";
        default:
            return "Weather-App\\img\\eye-roll.png";
    }
}
