const apiKey = 'ed27bc3e79a044f8af6174250241911&q'; // Замените на ваш API ключ
const weatherInfo = document.getElementById('weather-info');
const cityInput = document.getElementById('city-input');
const getWeatherButton = document.getElementById('get-weather');

getWeatherButton.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        fetchWeather(city);
    } else {
        alert('Пожалуйста, введите название города.');
    }
});

async function fetchWeather(city) {
    const url = `https://api.weatherapi.com/v1/current.json?key=ed27bc3e79a044f8af6174250241911&q=${''}=no`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Город не найден');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        weatherInfo.innerHTML = `<p>${error.message}</p>`;
    }
}

function displayWeather(data) {
    const { location, current } = data;
    
    weatherInfo.innerHTML = 
        `<h2>${location.name}, ${location.country}</h2>
        <p>Температура: ${current.temp_c} °C</p>
        <p>Состояние: ${current.condition.text}</p>
        <img src=${current.condition.icon}" alt="${current.condition.text}>
        <p>Ветер: ${current.wind_kph} км/ч</p>
        <p>Влажность: ${current.humidity}%</p>`
    ;
}
